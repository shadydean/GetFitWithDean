const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const badgeSchema = new Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String },
    criteria: { type: String },  // Criteria for earning the badge (e.g., "Complete 10 tasks")
    pointsRequired: { type: Number }, // Points required for earning the badge
  }, { timestamps: true });
  
  module.exports = mongoose.model('Badge', badgeSchema);
  