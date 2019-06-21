const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://dev:gqwabc123@cluster0-jmnp9.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
});

app.use(cors());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

app.use(require('./routes'));

app.listen(3333);
