// routes/artworks.js
const express = require('express');
const router = express.Router();
const { get_artworks } = require('../controllers/art_controller');

router.get('/', get_artworks);

module.exports = router;