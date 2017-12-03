const urls = require('../../app/controllers/urls.server.controller');

module.exports = function(app){
  app.route('/api/shorten')
    .post(urls.create);
    // .get(urls.getAllUrls)   //admin용 DB 조회
    // .delete(urls.deleteAll);  //admin용 DB 초기화

  app.route('/api/korean')
    .get(urls.isRegistered)
    .post(urls.makeKorean)
    .put(urls.putKorean);

    app.route('/api/analysis')
    .get(urls.getCount);
}
