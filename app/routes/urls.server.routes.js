const urls = require('../../app/controllers/urls.server.controller');

module.exports = function(app){
  app.route('/api/shorten')
    .post(urls.create)
    .put(urls.makeKorean)
    .get(urls.getAllUrls)
    .delete(urls.deleteAll);
}
