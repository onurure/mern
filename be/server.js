require('dotenv').config()

const express = require('express')

const app = express()

app.get('/', (req, res) => {
  console.log(`istek geldi`)
  res.json({msg:'dneeme'})
})

app.listen(process.env.PORT, () => {
  console.log('dinleniyor')
})