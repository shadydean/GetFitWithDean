const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leaderboardSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' }, // Reference to the user
    rank: { type: Number },                             // Current rank in the leaderboard
    points: { type: Number },                           // User's total points
  }, { timestamps: true });
  
  module.exports = mongoose.model('Leaderboard', leaderboardSchema);
  