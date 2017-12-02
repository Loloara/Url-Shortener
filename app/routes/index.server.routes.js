module.exports = function(app) {
  var index = require('../controllers/index.server.controller');
  app.route('/')
    .get(index.render);

  app.route('/:customUrl')
    .get(index.redirect);
}
