var express = require('express'),   //express 모듈
    morgan = require('morgan'),     //logging을 위한 모듈
    compress = require('compression'),  //리소스 압축 및 통신 성능을 위한 모듈
    bodyParser = require('body-parser'),  //req body 파싱을 위한 모듈
    methodOverride = require('method-override') , //라우팅을 편하게 개발하기 위한 모듈
    config = require('./config')
    ;

module.exports = function() {
  var app = express();

  if(process.env.NODE_ENV === 'development') {  //app.js 또는 콘솔 창에서 설정
      console.log("Development Mode");
      app.use(morgan('dev'));     //로그 상세히
  } else if (process.env.NODE_ENV === 'production') {
      console.log("Production Mode");
      app.use(compress());        //리소스 압축으로 통신 성능 개선
  }

  app.use(bodyParser.urlencoded({
      extended : true           //req.body가 json 형식처럼 전부 펼쳐져서 보여진다.
  }));
  app.use(bodyParser.json());   //json parser
  app.use(methodOverride());    //post,get,put,delete 메소드 for routes

  app.set('views', './app/views');  //템플릿이 있는 디렉토리
  app.set('view engine', 'ejs');    //템플릿 엔진으로 ejs 사용

  require('../app/routes/index.server.routes.js')(app);
  require('../app/routes/urls.server.routes.js')(app);
  app.use(express.static('./public'));    //static 폴더 지정
  return app;
}
