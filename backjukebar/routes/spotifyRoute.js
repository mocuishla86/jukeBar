const express = require("express");
const passport = require("passport");
const router = express.Router();
const SpotifyPartyModel = require("../models/SpotifyPartyModel");
const Spotify = require("../spotify/spotify2");//hte

router.get('/', (req, res, next) => {
  SpotifyPartyModel.find()
  .then(parties => res.status(200).json({data: parties}))
  .catch(err => res.status(500).json({data: err}));
});

router.post("/", (req, res, next) => {
  const partyName = req.body.partyName;
  const userID = req.user._id;
  if (partyName === "") {
    res.status(400).json({ message: "Please provide a non empty party name" });
    return;
  }

  //TODO: 1. CREO UNA LISTA DE SPOTIFY
  const spotify = new Spotify();

  //¿de donde saco el token?
  //Por un lado tengo el user: req.user
  //Por otro lado, tengo la base de datos: tengo que hacer una consulta a mi modelo SpotifyToken
   //Tengo que encontrar el que tenga el userid igual al req.user._id
    //De ese, la propiedad token será mi token deseado.

  //spotify.createPlaylist(token,partyName).then(...)
  const newParty = new SpotifyPartyModel({
    partyName, userID
    //, spotifyListId
  });

  newParty.save()
  .then(savedParty => res.status(200).json({data: savedParty})) //volver a añadir savedParty si falla
  .catch(error => res.status(500).json(error));
});


module.exports = router;