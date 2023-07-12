const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name!"],
  },
  email: {
    type: String,
    required: [true, "Please provide an Email ID"],
    unique: true,
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  contact: {
    type: Number,
    required: [true, "Please provide a contact number"],
  },
  course: {
    standard: {
      type: String,
    },
    subject: {
      type: String,
    }
  },
  role: {
    type: String,
  },
  profile: {
    type: String,
  },
  address: {
    type: String,
  },
  star: {
    type: Number,
    default: 0,
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
