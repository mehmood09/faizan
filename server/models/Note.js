const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let noteSchema = new Schema({
    Id: {
        type: String
      },
  Question: {
    type: String
  },
  Answer: {
    type: String
  },
  Chapter: {
    type: String
  },
  Class: {
    type: String
  },
  Subject: {
    type: String
  },
}, {
    collection: 'notes'
  })
module.exports = mongoose.model('Note', noteSchema)