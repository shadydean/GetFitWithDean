const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Task reference schema
const taskReferenceSchema = new Schema({
    _id: { type: Schema.Types.ObjectId },   // Unique ID for the task
    name: { type: String, required: true }, // Task name
    description: { type: String },          // Task description
    points: { type: Number, required: true },// Points associated with the task
});

// Day schema
const daySchema = new Schema({
    day: { type: Number, required: true },  // Day of the week (e.g., 1, 2, 3...)
    focus: { type: String, required: true },// Focus of the day (e.g., "Push", "Pull")
    tasks: [taskReferenceSchema],           // List of tasks for the day
});

// Week schema
const weekSchema = new Schema({
    week: { type: Number, required: true },  // Week number (1, 2, 3, 4, etc.)
    days: [daySchema],                       // Array of days for each week
});

// Course schema
const courseSchema = new Schema({
    name: { type: String, required: true, unique: true }, // Course name
    price: { type: Number, required: true },              // Course price
    description: { type: String },                        // Course description
    weeks: [weekSchema],                                  // Array of weeks, each containing days and tasks
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);
