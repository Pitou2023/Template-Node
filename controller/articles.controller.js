const { get } = require('mongoose');
const {
  getArticles,
  createArticle,
  deleteArticle,
} = require('../queries/articles.queries');

exports.articleList = async (req, res, next) => {
  try {
    const articles = await getArticles();
    res.render('articles/article', { articles });
  } catch (err) {
    next(err);
  }
};

exports.articleNew = (req, res, next) => {
  res.render('articles/article-form');
};

exports.articleCreate = async (req, res, next) => {
  try {
    const body = req.body;
    await createArticle(body);
    res.redirect('/');
  } catch (err) {
    {
      const errors = Object.keys(err.errors).map(
        (key) => err.errors[key].message
      );
      res.status(400).render('articles/article-form', { errors });
    }
  }
};

exports.articleDelete = async (req, res, next) => {
  try {
    const articleId = req.params.articleId;
    await deleteArticle(articleId);
    const articles = await getArticles();
    res.render('articles/article-list', { articles });
  } catch (err) {
    next(err);
  }
};
