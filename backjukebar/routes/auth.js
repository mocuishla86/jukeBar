const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/User");
const SpotifyToken = require("../models/SpotifyToken");
const Spotify = require("../spotify/spotify2");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, theUser, failureDetails) => {
    // Check for errors
    if (err) {
      res.status(500).json({ message: "something went bad" });
      return;
    }
    if (!theUser) {
      res.status(401).json({ failureDetails });
      return;
    }

    const spotify = new Spotify();

    const spotifyLoginUrl = spotify.createAuthorizeURL();

    // Return user and logged in
    req.login(theUser, err => {
      if (err) {
        res.status(500).json({ message: "login proccess went bad" });
        return;
      }
      res.status(200).json({ theUser, spotifyLoginUrl });
      return;
    });
  })(req, res, next);
});

router.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  if (username === "" || password === "") {
    res
      .status(400)
      .json({ message: "Please provide an username and password" });
    return;
  }

  User.findOne({ username }).then(foundUser => {
    if (foundUser !== null) {
      res.status(400).json({ message: "The username already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass
    });

    newUser.save().then(savedUser =>
      req.login(savedUser, err => {
        if (err) {
          res.status(500).json({ message: "login went wrong" });
        }

        res.status(200).json(savedUser);
      })
    );
  });
});

router.put("/edit/:id", (req, res, next) => {
  const { username } = req.body;

  User.findByIdAndUpdate(req.params.id, {
    username
  }).then(user => res.status(200).json(user));
});

router.get("/logout", (req, res) => {
  req.logout();
  res.status(200).json({ message: "logged out" });
});

router.post("/upload", (req, res, next) => {});

router.get("/loggedin", (req, res, next) => {
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }

  res.status(403).json({ message: "Unauthorized" });
});

router.post("/login-spotify", (req, res, next) => {
  const spotify = new Spotify();
  const code = req.body.code;
  console.log("Code Spotify: " + code + " for user \n " + req.user); //REQ.USER

  spotify
    .setAuthorizationCodeGrant(req.body.code)
    .then(token_data => {
      console.log("Logged spotify in back: " + JSON.stringify(token_data));

      // https://stackoverflow.com/a/10266789
      // Borrar todos los SpotifyToken que pertenezcan al usuario actual, es edcir, que tengan userid = req.user._id
      SpotifyToken.find({ userID: req.user._id })
        .remove()
        .exec();

      //Añadir ID de usuario, data.token, data.refresh_token (revisar nombre de propiedaes)-
      const token = new SpotifyToken({
        userID: req.user._id,
        access_token: token_data.access_token,
        refresh_token: token_data.refresh_token
      });

      token
        .save()
        .then(savedToken => res.status(200).json({})) //volver a añadir savedParty si falla
        .catch(error => res.status(500).json(error));
    })
    .catch(error => {
      console.log("Not Logged spotify in back");
      res.status(500).json({ message: "spotify login proccess went bad" });
    });
});

module.exports = router;
