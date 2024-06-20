const router = require('express').Router();
router.get('/', (req, res) => {
  res.render('articles/article-list');
});

module.exports = router;
