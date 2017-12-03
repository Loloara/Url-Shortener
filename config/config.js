//현재는 development, production 환경변수가 다른 점 없음
module.exports = require('./env/' + process.env.NODE_ENV + '.js');
