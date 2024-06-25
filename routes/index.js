const router = require('express').Router();
const articles = require('./articles');

//on utilise et on redirige vers le fichier articles.js
router.use('/articles', articles);
router.get('/', (req, res) => {
  res.redirect('/articles');
});

//on exporte le router
module.exports = router;
