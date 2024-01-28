const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let employeeSchema = new Schema({
  name: {
    type: String
  },
  cnic: {
    type: String
  },
  job: {
    type: String
  },
  phone: {
    type: String
  },
  idate: {
    type: Date
  },
  edate: {
    type: Date
  },
  email: {
    type: String
  },
}, {
    collection: 'employees'
  })
module.exports = mongoose.model('Employee', employeeSchema)