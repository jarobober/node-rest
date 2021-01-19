const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

// Import Routes
const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute);

// ROUTES
app.get('/', (req, res) => {
  res.send('We are on home');
});

// Connest to DB
mongoose.connect(
process.env.DB_CONNECTION,
{ useNewUrlParser: true }, 
() => {
  console.log('connected to DB!')
})

// How to start listening to the server
app.listen(3000);