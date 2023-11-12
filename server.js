// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

// ROUTES
app.get('/', (req, res) => {
  res.send('Hello World! Books API!')
})

// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))


// books
const booksController = require('./controllers/book_controller.js')
app.use('/books', booksController)
