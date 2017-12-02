const Url = require('mongoose').model('Url');
const algo = require('./algorithm/shorten');
const Promise = require('bluebird');

exports.render = function(req,res) {
  res.render('index');
};

exports.redirect = function(req,res){
  let customUrl = req.params.customUrl;
  is_hangul_url(customUrl).then(function(result){ //동기식으로 한글 URL체크
    if(result){    //한글이 포함된 URL (custom url)
      Url.findOne({customUrl: customUrl}, function(err, doc){
        if(doc){
          res.redirect(doc.longUrl);
        }else{
          res.render('index');
        }
      });
    }else{  // 한글이 포함되지 않은 URL (short url)
      customUrl = algo.decoding(customUrl); //short url -> index
      Url.findOne({_id: customUrl}, function(err, doc){
        if(doc){
          res.redirect(doc.longUrl);
        }else{
          res.render('index');
        }
      });
    }
  });
};

function is_hangul_url(str) {
  return new Promise(function(resolve, reject){
    const check =  /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g;
    if(check.test(str)){
      resolve(true);
    }else{
      resolve(false);
    }
  });
}
