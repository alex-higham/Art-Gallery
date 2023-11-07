// Requirements
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const artworksRouter = require('./routes/art_routes');

// Middleware and MongoDB connections
dotenv.config();
const app = express();
const port = process.env.PORT;
mongoose.connect(process.env.MONGODB_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});
app.use(express.json());
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Routes
app.use('/api/art_routes', artworksRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});