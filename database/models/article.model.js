const mongoose = require('mongoose');
const schema = mongoose.Schema;

const articleSchema = schema(
  {
    Nom: String,
    Prenom: String,
    Sujet: String,
    Categorie: String,
    Content: String,
  },
  {
    timestamps: true,
    collection: 'articles',
  }
);

const Article = mongoose.model('articles', articleSchema);

module.exports = Article;
