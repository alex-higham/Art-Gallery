const mongoose = require('mongoose');

const art_schema = new mongoose.Schema({
  title: String,
  descripition: String,
  imageUrl: String,
});

module.exports = mongoose.model('Artwork', art_schema);