const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String },
    tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }], // Array of tasks within the course
  }, { timestamps: true });
  
  module.exports = mongoose.model('Course', courseSchema);
  