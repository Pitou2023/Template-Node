const router = require('express').Router();
const articles = require('./articles');

router.use('/articles', articles);
router.get('/', (req, res) => {
  res.redirect('/articles');
});

module.exports = router;
