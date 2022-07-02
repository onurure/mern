const mongoose = require('mongoose')

const checkIdValidate = (id) => {
  return mongoose.Types.ObjectId.isValid(id)
}

module.exports = {
  checkIdValidate
}