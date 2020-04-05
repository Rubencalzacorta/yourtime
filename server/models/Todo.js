const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  name: String,
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  category: {
    type: String,
    enum: ['Work', 'Study', "Personal Project", "Workout", "Fun", "Reading"]
  },
  time: Number,
  status: {
    type: String,
    enum: ['Todo', 'Doing', "Done"]
  },
  beginningDate: Date,
  endDate: Date
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;
