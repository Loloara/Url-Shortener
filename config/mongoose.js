var config = require('./config'),
    mongoose =require('mongoose');

module.exports = () => {
  mongoose.Promise = global.Promise;
  mongoose.connect(config.db,
    { useMongoClient: true },
    err => console.log(err ? err : 'MongoDB connected.')
  );

  require('../app/models/url.server.model.js');
}
