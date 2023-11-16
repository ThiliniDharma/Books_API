const express = require('express')
const books = express.Router()
const book = require('../models/books.js')
const cors = require('cors')

books.get('/seed', (req, res) => {
    book.insertMany([{
        "title": "The Shinobi Initiative",
        "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
        "year": 2014,
        "quantity": 10,
        "imageURL": "https://imgur.com/LEqsHy5.jpeg"
      },
      {
        "title": "Tess the Wonder Dog",
        "description": "The tale of a dog who gets super powers",
        "year": 2007,
        "quantity": 3,
        "imageURL": "https://imgur.com/cEJmGKV.jpg"
      },
      {
        "title": "The Annals of Arathrae",
        "description": "This anthology tells the intertwined narratives of six fairy tales.",
        "year": 2016,
        "quantity": 8,
        "imageURL": "https://imgur.com/VGyUtrr.jpeg"
      },
      {
        "title": "Wâˆ€RP",
        "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        "year": 2010,
        "quantity": 4,
        "imageURL": "https://imgur.com/qYLKtPH.jpeg"
      }])
        .then(res.status(200).json({
            message: 'Seed successful'
        }))
        .catch(res.status(400).json({
            message: 'Seed unsuccessful'
        }))
})

books.get('/', (req, res) => {
book.find()
        .then(foundbooks => {
            res.json(foundbooks)
        })
        .catch(err => {
          console.log(err) 
          res.json('error404')
        })
})

// books.get('/:id', (req, res) => {
//    book.findOne({ id: req.params.id})
//         .then(foundbook => {
//             res.json(foundbook)
//         })
// })

books.get('/:id', (req, res) => {
  book.findById(req.params.id)
  .then(foundBook => {
    res.json(foundBook)
  }) 
  .catch(err => {
    console.log(err) 
    res.json('error404')
  })
})

books.post('/add', (req, res) => {
book.create(req.body)
  .then(() => {
  res.json(req.body) //res.redirect('/books')
  })
  .catch(err => {
    console.log(err) 
    res.json('error404')
  })
})

books.put('/update/:id', (req, res) => {
  book.findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
    res.json(`/books/${req.params.id}`)
  })
  .catch(err => {
      console.log('err', err)
      res.json('error404')
  })
})

books.delete('/delete/:id', (req, res) => {
 book.findByIdAndDelete(req.params.id)
  .then(deleteBook => {
    res.json(deleteBook)
  })
  .catch(err => {
    console.log('err', err)
    res.json('error404')
  })
})


          
module.exports = books
