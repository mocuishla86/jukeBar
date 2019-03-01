const express = require("express");
const passport = require("passport");
const Party = require("../models/Party");

const router = express.Router();

router.post("/", (req, res, next) => {
  const partyName = req.body.partyName;
  if (partyName === "") {
    res.status(400).json({ message: "Please provide a non empty party name" });
    return;
  }

  const newParty = new Party({
    partyName
  });

  newParty.save()
  .then(savedParty => res.status(200).json(savedParty))
  .catch(error => res.status(500).json(error));
});

module.exports = router;
