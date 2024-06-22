const Article = require('../database/models/article.model');

exports.getArticles = () => {
  return Article.find({}).exec();
};

exports.createArticle = (article) => {
  const newArticle = new Article(article);
  return newArticle.save();
};

exports.deleteArticle = (articleId) => {
  return Article.findByIdAndDelete(articleId).exec();
};
