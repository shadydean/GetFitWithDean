const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    points: { type: Number, required: true },        // Points awarded for completing the task
    course: { type: Schema.Types.ObjectId, ref: 'Course' }, // Reference to the course it belongs to
  }, { timestamps: true });
  
  module.exports = mongoose.model('Task', taskSchema);
  