const express = require("express");
const passport = require("passport");
const router = express.Router();
const TracksModel = require("../models/TracksModel");
const Spotify = require("../spotify/spotify2");//hte
const SpotifyToken = require("../models/SpotifyToken");

router.get('/', (req, res, next) => {
  TracksModel.find()
  .then(track => res.status(200).json({data: track}))
  .catch(err => res.status(500).json({data: err}));
});

router.post("/", (req, res, next) => {
  const track = req.body.track;
  // const userID = req.user._id;
  if (track === "") {
    res.status(400).json({ message: "Please search a song" });
    return;
  }
//¿de donde saco el token?
  //Por un lado tengo el user: req.user
  //Por otro lado, tengo la base de datos: tengo que hacer una consulta a mi modelo SpotifyToken
  //Tengo que encontrar el que tenga el userid igual al req.user._id
  //De ese, la propiedad token será mi token deseado.

  const userID = req.user._id;

  //1. Busco en base de datos el token.
  SpotifyToken.findOne({ userID: req.user._id }, function(err, spotiyToken) {
    if (err) {
      res.status(500).json(error);
      return;
    }

    const token = spotiyToken.access_token;

    const spotify = new Spotify();

    // 2. Obtener usuario actual de Spotify
    spotify
      .getUserId(token)
      .then(userId => {
        //3. busco la canción en Spotify

        spotify
          .searchTrack(token, track, userId)
          .then(track => {
            console.log("cancion hallada: " + JSON.stringify(track));

            const spotifytrackId = track.id;

            //4. Creo la fiesta en base de datos añadiéndole la spotifylist Id.
            const newTrack = new TracksModel({
              track,
              spotifytrackId,
              userId
            });

            newTrack
              .save()
              .then(savedTrack => res.status(200).json({ data: savedTrack })) //volver a añadir savedParty si falla
              .catch(error => res.status(500).json(error));
          })
          .catch(error => {
            console.log(
              "Error al guardar la lista: " + JSON.stringify(error)
            );
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


module.exports = router;