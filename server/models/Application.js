const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  company: String,
  role: String,
  status: {
    type: String,
    enum: ["Applied", "Interview", "Offer", "Rejected"],
    default: "Applied"
  },
  date: String,
  link: String
});

module.exports = mongoose.model('Application', ApplicationSchema);
