require('dotenv').config()

const express = require('express')
const connectMongo = require('./helper/db')
const postsRoute = require('./routes/posts')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.use('/api/posts', postsRoute)

connectMongo()


app.listen(process.env.PORT, () => {
  console.log('dinleniyor')
})