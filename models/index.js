const User = require('./User');
const Article = require('./Article');

User.hasMany(Article, {
  foreignKey: 'author',
  onDelete: 'CASCADE'
});

Article.belongsTo(User, {
  foreignKey: 'author'
});

module.exports = { User, Article };
