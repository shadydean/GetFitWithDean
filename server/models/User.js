const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  completedTasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }], // Array of completed task IDs
  badges: [{ type: Schema.Types.ObjectId, ref: 'Badge' }],       // Array of earned badge IDs
  points: { type: Number, default: 0 },                         // Total points for leaderboard
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
