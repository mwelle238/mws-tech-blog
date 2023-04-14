const User = require('./User');
const Article = require('./Article');
const Comment = require('./Comment');

User.hasMany(Article, {
  foreignKey: 'author',
  onDelete: 'CASCADE'
});

Article.belongsTo(User, {
  foreignKey: 'author'
});

User.hasMany(Comment, {
  foreignKey: 'author_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'author_id',
});

Article.hasMany(Comment, {
  foreignKey: 'article_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(Article, {
  foreignKey: 'article_id',
})


module.exports = { User, Article, Comment };
