const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const SpotifyListSchema = new Schema({
  userID: String,
  partyName: String,
  // spotifyListId: String,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const SpotifyPartyModel = mongoose.model('SpotifyPartyModel', SpotifyListSchema);
module.exports = SpotifyPartyModel;