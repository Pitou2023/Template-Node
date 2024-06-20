const router = require('express').Router();
router.get('/', (req, res) => {
  res.render('articles/article-list');
});
router.get('/article/new', (req, res) => {
  res.render('articles/article-form');
});

module.exports = router;
