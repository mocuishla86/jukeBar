const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const trackSchema = new Schema({
  name: String,
  artist: String,
  album: String,
  image: String,
  spotifytrackId: String,
  partyID:String,
  votes:Number
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Track = mongoose.model('Track', trackSchema);
module.exports = Track;
