const mongoose = require('mongoose');
const schema = mongoose.Schema;

const articleSchema = schema({
  content: {
    type: String,
    maxlength: 140,
    minlength: 1,
    required: true,
  },
});

const Article = mongoose.model('article', articleSchema);

module.exports = Article;
