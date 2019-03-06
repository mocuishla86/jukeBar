const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const trackSchema = new Schema({
  track: String,
  spotifytrackId: String,
  userId: String,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Track = mongoose.model('Track', trackSchema);
module.exports = Track;
