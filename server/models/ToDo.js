const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
    },
    when: {
      type: String,
      required: true,
    },
    isPriority: {
      type: Boolean,
      default: false,
    },
    isDone: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model('ToDo', toDoSchema);
