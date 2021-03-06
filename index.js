'use strict';

const mongoose = require('mongoose');
const server = require('./src/server');
server.start();

mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...',err));
  // To get rid of deprecation warning, I used mongoose.set
  mongoose.set('useCreateIndex', true);
