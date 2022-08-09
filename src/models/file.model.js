const mongoose = require('mongoose');
const types = mongoose.Schema.Types;

const fileSchema = mongoose.Schema({
  name: {
    type: types.String,
    required: true,
  },
  size: {
    type: types.Number,
    required: true,
  },
  type: {
    type: types.String,
    required: true,
  },
  path: {
    type: types.String,
    required: true,
  },
  owner: {
    type: types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: types.Date,
    default: Date.now,
  },
  updatedAt: {
    type: types.Date,
    default: Date.now,
  },
  server: {
    type: types.ObjectId,
    ref: 'Server',
    required: true,
  },
});

const File = mongoose.model('File', fileSchema);

module.exports = File;