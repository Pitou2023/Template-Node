const Article = require('../database/models/article.model');

exports.articleList = async (req, res, next) => {
  try {
    const articles = await Article.find({}).exec();
    res.render('articles/article-list', { articles });
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
    const newArticle = new Article(body);
    await newArticle.save().then((newArticle) => res.redirect('/'));
  } catch (err) {
    {
      const errors = Object.keys(err.errors).map(
        (key) => err.errors[key].message
      );
      res.status(400).render('articles/article-form', { errors });
    }
  }
};
