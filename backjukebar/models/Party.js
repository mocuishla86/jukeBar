const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const partySchema = new Schema({
  partyName: String,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Party = mongoose.model('Party', partySchema);
module.exports = Party;

