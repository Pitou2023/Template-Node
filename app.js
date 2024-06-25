const express = require('express');
const morgan = require('morgan');
const path = require('path');
const index = require('./routes');

require('./database');

const app = express();
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//les middlewares
app.use(morgan('short'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(index); //on passe vers le fichier index.js dans routes

if (process.env.NODE_ENV === 'development') {
  app.use((err, req, res, next) => {
    const code = err.code || 500;
    res.status(code).json({
      message: code === 500 ? null : err.message,
    });
  });
}

app.listen(port);
