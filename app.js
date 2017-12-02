process.env.NODE_ENV = process.env.NODE_ENV || 'development';   //환경변수 NODE_ENV를 설정해주지 않았으면 development모드(log)

const express = require('./config/express_config'),
      mongoose = require('./config/mongoose');

mongoose();
var app = express();
app.listen(3000);
module.exports = app;

console.log('Server running at localhost');
