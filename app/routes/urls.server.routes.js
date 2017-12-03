const urls = require('../../app/controllers/urls.server.controller');

module.exports = function(app){
  app.route('/api/shorten')
    .post(urls.create)
    .get(urls.getAllUrls)
    .delete(urls.deleteAll);

  app.route('/api/korean')
    .get(urls.isRegistered)
    .post(urls.makeKorean)
    .put(urls.putKorean);

    app.route('/api/analysis')
      .get(urls.getCount);
}
