const express = require('express');
const router = express();

const Book = require('../models/book');
const jsonParser = require('body-parser').json();

router.get('/', (req, res) => {
  return Book
      .find()
      .then(books => {
        return res.status(200).json(books);
      });
});

router.post('/', jsonParser, (req, res) => {
  // ALWAYS VALIDATE DATA FROM THE CLIENT
  const newBook = req.body;
  return Book
      .create(newBook)
      .then(book => {
        return res.status(201).json(book);
      })
      .catch(err => {
        console.log(err);
        return res.status(500).send(err.message);
      });
});

module.exports = router;