const Promise = require('bluebird');
const base62 = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const base = base62.length;

exports.decoding = function(shortUrl){  //short url -> index
  return new Promise(function(resolve, reject){
    let _id = 0,
        pos = 0,
        mul = 1;

    for(let i=0;i<shortUrl.length;i++){
      pos = base62.indexOf(shortUrl[i]);
      _id += pos * mul;
      mul *= base;
    }

    resolve(_id);
  });
}

exports.encoding = function(_id){   //index -> short url
  return new Promise(function(resolve, reject){
    let shortUrl = "";
    while(_id){
      let index = _id % base;
      _id = Math.floor(_id / base);
      shortUrl = shortUrl + base62[index].toString();
    }
    resolve(shortUrl);
  });
}
