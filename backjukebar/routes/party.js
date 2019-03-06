const express = require("express");
const passport = require("passport");
const Party = require("../models/Party");
const Spotify = require("../spotify/spotify2"); //hte
const SpotifyToken = require("../models/SpotifyToken");
const router = express.Router();

router.get("/", (req, res, next) => {
  Party.find()
    .then(parties => res.status(200).json({ data: parties }))
    .catch(err => res.status(500).json({ data: err }));
});

router.post("/", (req, res, next) => {
  const partyName = req.body.partyName;
  if (partyName === "") {
    res.status(400).json({ message: "Please provide a non empty party name" });
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
        //3. Creo la lista de spotify

        spotify
          .createPlaylist(token, partyName, userId)
          .then(playlist => {
            console.log("Creada lista de spotiy: " + JSON.stringify(playlist));

            const spotifyListId = playlist.id;

            //4. Creo la fiesta en base de datos añadiéndole la spotifylist Id.
            const newParty = new Party({
              partyName,
              userID,
              spotifyListId
            });

            newParty
              .save()
              .then(savedParty => res.status(200).json({ data: savedParty })) //volver a añadir savedParty si falla
              .catch(error => res.status(500).json(error));
          })
          .catch(error => {
            console.log(
              "Error al crear la lista de spotify: " + JSON.stringify(error)
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

// router.post("/addsong", (req, res, next) => {

//   console.log(spotify)
//   spotify.createList('sandrs');
//   // const songName = req.body.songName; (futuro id de spotify)
//   // if (songName === "") {
//   //   res.status(400).json({ message: "Please enter a song" });
//   //   return;
//   // }
//   // const newParty = new Party({
//   //   partyName
//   //   //, spotifyListId
//   // });

//   // newParty.save()
//   // .then(savedParty => res.status(200).json({data: savedParty})) //volver a añadir savedParty si falla
//   // .catch(error => res.status(500).json(error));
// });

//   //Save it to Spotify
//  spotify.createList(partyName)
//  .then(playList => {
//     console.log(JSON.stringify(playList))
//     res.status(200).json(savedParty)
//  })
//  .catch(error => {
//   console.log(JSON.stringify(error))
//     res.status(500).json("Error creating playlist: "+JSON.stringify(error))
//  })

module.exports = router;
