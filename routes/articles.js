const router = require('express').Router();

//on importe les fonctions du controller
const {
  articleList,
  articleNew,
  articleCreate,
  articleDelete,
  articleEdit,
  articleUpdate,
} = require('../controller/articles.controller');

//on redirige vers les fonctions du controller
router.route('/').get(articleList).post(articleCreate);
router.get('/new', articleNew);
router.get('/edit/:articleId', articleEdit);
router.post('/update/:articleId', articleUpdate);
router.delete('/:articleId', articleDelete);

//on exporte le router
module.exports = router;
