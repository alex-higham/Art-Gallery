const Artwork = require('../models/art_schema');
// exports get and other requests for routing
exports.get_artworks = async (req, res) => {
  try {
    const artworks = await Artwork.find();
    res.json(artworks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};