const express = require("express");
const passport = require("passport");
const Party = require("../models/Party");
const Spotify = require("../spotify/spotify");

const router = express.Router();
//const spotify = new Spotify();

router.get('/', (req, res, next) => {
  Party.find()
  .then(parties => res.status(200).json({data: parties}))
  .catch(err => res.status(500).json({data: err}));
});


router.post("/", (req, res, next) => {
  const partyName = req.body.partyName;
  if (partyName === "") {
    res.status(400).json({ message: "Please provide a non empty party name" });
    return;
  }
  const newParty = new Party({
    partyName
    //, spotifyListId
  });

  newParty.save()
  .then(savedParty => res.status(200).json({data: savedParty})) //volver a añadir savedParty si falla
  .catch(error => res.status(500).json(error));
});







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
