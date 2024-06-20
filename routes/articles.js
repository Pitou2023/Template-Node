const router = require('express').Router();
const {
  articleList,
  articleNew,
  articleCreate,
} = require('../controller/articles.controller');

router.get('/', articleList);
router.get('/new', articleNew);
router.post('/', articleCreate);

module.exports = router;
