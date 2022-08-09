const mongoose = require('mongoose');
const types = mongoose.Schema.Types;

const serverSchema = mongoose.Schema({
  name: {
    type: types.String,
    required: true,
  },
  files: {
    type: [types.ObjectId],
    ref: 'File',
    required: true,
    default: [],
  },
});

const Server = mongoose.model('Server', serverSchema);

module.exports = Server;