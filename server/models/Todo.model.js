const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  name: String,
  type: {
    type: String,
    enum: ['Work', 'Study', "Personal Project", "Workout", "Fun", "Reading"]
  },
  time: Number,
  status: {
    type: String,
    enum: ['ToDo', 'Doing', "Done"]
  },
  beginingDate: Date,
  endDate: Date
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Todo = mongoose.model('Todo', TodoSchema);
module.exports = Todo;
