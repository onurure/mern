const { default: mongoose, Schema } = require("mongoose")

const schema = mongoose.Schema

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Post', postSchema)