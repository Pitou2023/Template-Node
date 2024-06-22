const router = require('express').Router();
const {
  articleList,
  articleNew,
  articleCreate,
  articleDelete,
} = require('../controller/articles.controller');

router.get('/', articleList);
router.get('/new', articleNew);
router.post('/', articleCreate);
router.delete('/:articleId', articleDelete);

module.exports = router;
