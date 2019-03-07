const express = require("express");
const passport = require("passport");
const router = express.Router();
const TracksModel = require("../models/TracksModel");
const Party = require("../models/Party");
const Spotify = require("../spotify/spotify2"); //hte
const SpotifyToken = require("../models/SpotifyToken");

router.get("/", (req, res, next) => {
  TracksModel.find()
    .then(track => res.status(200).json({ data: track }))
    .catch(err => res.status(500).json({ data: err }));
});

router.post("/search", (req, res, next) => {
  const track = req.body.track;
  // const userID = req.user._id;
  if (track === "") {
    res.status(400).json({ message: "Please search a song" });
    return;
  }

  const userID = req.user._id;

  //1. Busco en base de datos el token.
  SpotifyToken.findOne({ userID: req.user._id }, function(err, spotiyToken) {
    if (err) {
      res.status(500).json({ error });
      return;
    }

    const token = spotiyToken.access_token;
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    const spotify = new Spotify(fullUrl);

    // 2. Obtener usuario actual de Spotify
    spotify
      .getUserId(token)
      .then(userId => {
        //3. busco la canción en Spotify

        spotify
          .searchTrack(token, track)
          .then(result => {
            console.log(
              "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
            );
            console.log(
              "cancion hallada: " + JSON.stringify(result.tracks.items[0])
            );
            
            const tracksConverted = result.tracks.items.map(item => {
              return {
                name: item.name,
                artist: item.artists[0].name,
                spotifytrackId: item.id,
                album: item.album.name,
                image: item.album.images[0].url,
              }
            });
     
             res.status(200).json(tracksConverted) 
            // const newTrack = new TracksModel({
            //   track,
            //   spotifytrackId,
            //   userId
            // });

            // newTrack
            //   .save()
            //   .then(savedTrack => res.status(200).json({ data: savedTrack })) //volver a añadir savedParty si falla
            //   .catch(error => res.status(500).json({ message: "NO ENTRA" }));
          })
          .catch(error => {
            console.log("Error al guardar la lista: " + JSON.stringify(error));
            res.status(500).json(error);
            return;
          });
      })
      .catch(err => {
        console.log(
          "Error al obtener el usuario de spotify: " + JSON.stringify(err)
        );
        res.status(500).json(error);
      });
  });
});

router.post("/", (req, res, next) => {
  const track = req.body.track;
  const partyId = req.body.partyId;

  if(!track) {
    res.status(400).json({ message: "Please provide a non empty track" });
    return;  
  }
  if (partyId === "") {
    res.status(400).json({ message: "Please provide a non empty party name" });
    return;
  }

  const userID = req.user._id;

  //1. Busco en base de datos el token.
  SpotifyToken.findOne({ userID: req.user._id }, function(err, spotiyToken) {
    if (err) {
      res.status(500).json(error);
      return;
    }

    const token = spotiyToken.access_token;

    const spotify = new Spotify();

    //2. Busco la  party para obtener el id de playlist de Spotify
    Party.findOne({_id: partyId})
    .then(party => {

      //3. Añado a la lista de spotify la canción
      spotify
        .addTrack(token, track.spotifytrackId, party.spotifyListId)
        .then(result => {
          console.log("Añadida canción a la lista de Spotiy: ");

          //4. Guardo la canción en base de datos
          const newTrack = new TracksModel({
            name: track.name,
            artist: track.artist,
            album: track.album,
            image: track.image,
            spotifytrackId: track.spotifytrackId,
            partyID:partyId,
            votes:0
          });

          newTrack
            .save()
            .then(savedTrack => res.status(200).json({ data: savedTrack })) 
            .catch(error => res.status(500).json(error));
        })
        .catch(error => {
          console.log(
            "Error al añadir la canción a la lista de spotify: " + JSON.stringify(error)
          );
          res.status(500).json(error);
          return;
        });
    })
    .catch(err => res.status(500).json({ data: err }));
  });
});


module.exports = router;
