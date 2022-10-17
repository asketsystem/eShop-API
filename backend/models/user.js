const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: String,
  images: String,
  countInStock: {
    type: Number,
    required: true,
  },
})

exports.User = mongoose.model('User', userSchema)
