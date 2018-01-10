const mongoose = require('mongoose');
const {MONGO_URL} = require('../config/');
mongoose.Promise = global.Promise;

mongoose.connect(MONGO_URL, {useMongoClient: true});

mongoose.connection
  .once('open', () => console.log('Connected to the database!'))
  .on('error', err => console.error(err));
