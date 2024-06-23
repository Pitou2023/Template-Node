const router = require('express').Router();
const {
  articleList,
  articleNew,
  articleCreate,
  articleDelete,
  articleEdit,
  articleUpdate,
} = require('../controller/articles.controller');

router.get('/', articleList);
router.get('/new', articleNew);
router.get('/edit/:articleId', articleEdit);
router.post('/', articleCreate);
router.post('/update/:articleId', articleUpdate);
router.delete('/:articleId', articleDelete);

module.exports = router;
