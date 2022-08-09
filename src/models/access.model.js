const mongoose = require('mongoose');
const types = mongoose.Schema.Types;

const accessSchema = mongoose.Schema({
  user: {
    type: types.ObjectId,
    ref: 'User',
    required: true,
  },
  server: {
    type: types.ObjectId,
    ref: 'Server',
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
  size: {
    type: types.Number,
    required: true,
  },
  isAdmin: {
    type: types.Boolean,
    required: true,
    default: false,
  },
});

const Access = mongoose.model('Access', accessSchema);

module.exports = Access;