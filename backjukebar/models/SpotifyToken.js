const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const spotifyTokenSchema = new Schema({
  userID: String,
  access_token: String,
  refresh_token: String,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const SpotifyToken = mongoose.model('SpotifyToken', spotifyTokenSchema);
module.exports = SpotifyToken;

