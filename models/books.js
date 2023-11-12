// require mongoose: 
const mongoose = require('mongoose')
const { Schema } = mongoose 

// schema:
const bookSchema = new Schema({
    title:String,
    description: String,
    year: { type: Number, required: true },
    quantity: { type: Number, required: true },
    imageURL: String
})

// model and export: 
const book = mongoose.model('Book', bookSchema)
module.exports = book

