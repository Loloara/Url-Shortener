const Url = require('mongoose').model('Url');
const algo = require('./algorithm/shorten');
const Promise = require('bluebird');

exports.render = function(req,res) {
  res.render('index');
};

exports.redirect = function(req,res){
  let customUrl = req.params.customUrl;
  is_hangul_url(customUrl.charAt(0)).then(function(result){ //동기식으로 한글 URL체크
    if(result){    //한글로 시작하는 URL (custom url)
      Url.findOne({customUrl: customUrl}, function(err, doc){
        if(doc){
          Url.findByIdAndUpdate(doc._id, {$inc: {count:1}}, function (err, data) {
            if(err){
              res.json({
                "result" : "ERROR",
                "message" : "increment count error"
              });
            }
          });

          res.redirect(doc.longUrl);
        }else{
          res.render('index');
        }
      });
    }else{  // 한글로 시작하지 않는 URL (short url)
      algo.decoding(customUrl).then(function(decoded){ //short url -> index
        Url.findOne({_id: decoded}, function(err, doc){
          if(doc){
            Url.findByIdAndUpdate(doc._id, {$inc: {count:1}}, function (err, data) {
              if(err){
                res.json({
                  "result" : "ERROR",
                  "message" : "increment count error"
                });
              }
            });

            res.redirect(doc.longUrl);
          }else{
            res.render('index');
          }
        });
      });
    }
  });
};

function is_hangul_url(ch) {
  return new Promise(function(resolve, reject){
    const check =  /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g;
    if(check.test(ch)){
      resolve(true);
    }else{
      resolve(false);
    }
  });
}
