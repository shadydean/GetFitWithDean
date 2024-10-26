const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Task reference schema
const taskReferenceSchema = new Schema({
    _id: { type: Schema.Types.ObjectId },   // Unique ID for the task
    name: { type: String, required: true }, // Task name
    description: { type: String },          // Task description
    points: { type: Number, required: true },// Points associated with the task
});

// User schema
const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    activeCourse: { type: Schema.Types.ObjectId, ref: 'Course' },
    completedTasks: [
        {
            week: { type: Number, required: true },
            day: { type: Number, required: true },
            tasks: [{ type: taskReferenceSchema }]  // Reference to taskReferenceSchema
        }
    ],
    badges: [{ type: Schema.Types.ObjectId, ref: 'Badge' }],
    points: { type: Number, default: 0 },
    totalPoints: { type: Number, default: 0 },
    currentWeek: { type: Number, default: 1 },
    currentDay: { type: Number, default: 1 },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
