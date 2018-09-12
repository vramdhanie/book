const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  title: {type: String, required: true},
  publisher: {type: String},
  publishDate: {type: Date}
});

const Book = mongoose.model('Books', bookSchema);

module.exports = Book;
