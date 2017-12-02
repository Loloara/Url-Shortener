const Url = require('mongoose').model('Url');
const algo = require('./algorithm/shorten');
const Promise = require('bluebird');

exports.create = function(req,res,next){
  let url = new Url(req.body);
  urlValidation(url.longUrl).then(function(result){
    if(result){ // 존재하는 URL
      url = result;
      res.json({
          "result": "SUCCESS",
          "message": "Already Exist",
          "customUrl": "http://localhost:3000/"+algo.encoding(url._id) //index -> short url
      });
    }else{  //처음 변환하는 URL
      url.customUrl = algo.encoding(url._id);
      url.save(function(err){
        if(err)
          return next(err);
        res.json({
            "result": "SUCCESS",
            "message": "created URL",
            "customUrl": "http://localhost:3000/"+url.customUrl
        });
      });
    }
  });
};

function urlValidation(longUrl){  //기존에 변환된 이력이 있는 URL인지 확인
  return new Promise(function(resolve, reject){
    Url.findOne({longUrl : longUrl}, function(err, doc){
      if(err)
        reject(err);
      else{
        if(!doc)
          resolve(false); // 새로운 url
        else
          resolve(doc); // db에 존재하는 url
      }
    });
  });
};

exports.getAllUrls = function(req,res,next){
  Url.find(function(err,urls){
    if(err)
      return next(err);
    res.json(urls);
  });
};

exports.deleteAll = function(req,res,next){
  const myquery = req.body;
  Url.deleteMany(myquery, function(err){
    if(err)
      return next(err);
    res.json({
        "result": "SUCCESS",
        "message": "삭제 성공"
    });
  })
};

exports.makeKorean = function(req,res,next){
  const id = algo.decoding(req.body.shortUrl);
  Url.findOne({_id : id}, function(err, doc){
    if(doc){
      doc.customUrl = req.body.customUrl;
      doc.save(function(err){
        if(err){
          next(err);
        }else{
          res.json({
            "result" : "SUCCESS",
            "message" : "한글 URL 생성 완료",
            "Custom URL" : doc.customUrl
          });
        }
      });
    }else{
      next(err);
    }
  });
};
