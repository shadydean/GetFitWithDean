const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    id: {type: Number, required: true, unique: true},
    name: { type: String, required: true },
    description: { type: String },
    points: { type: Number, required: true },
    course: { type: String, required: true}
  }, { timestamps: true });
  
  module.exports = mongoose.model('Task', taskSchema);
  