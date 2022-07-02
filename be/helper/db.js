const mongoose = require('mongoose')

const connectMongo = async () => {
  try {
    console.log('try connect')
    await mongoose.connect(process.env.MONGO_URL)
    console.log('connect')
  } catch (error) {
    console.log(error)
  }
}

module.exports = connectMongo