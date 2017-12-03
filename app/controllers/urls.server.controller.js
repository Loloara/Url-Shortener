const Url = require('mongoose').model('Url');
const algo = require('./algorithm/shorten');
const Promise = require('bluebird');

exports.create = function(req,res){
  let url = new Url(req.body);
  urlValidation(url.longUrl).then(function(result){
    if(result){ // 존재하는 URL
      algo.encoding(result._id).then(function(encoded){ //index -> short url
        res.json({
            "result": "SUCCESS",
            "message": "Already Exist",
            "shortUrl" : "http://localhost:3000/"+encoded
        });
      });
    }else{  //처음 변환하는 URL
      Url.find({status : 'created'})
        .sort({_id : -1})
        .exec(function(err, doc){
          if(err){
            res.json({
              "result" : "ERROR",
              "message" : err
            });
          }
          if(!doc[0])
            url._id = 100000;
          else
            url._id = doc[0]._id+1;
          algo.encoding(url._id).then(function(encoded){
            url.customUrl = encoded;
            url.save(function(err){
              if(err){
                res.json({
                  "result" : "ERROR",
                  "message" : err
                });
              }
              res.json({
                  "result": "SUCCESS",
                  "message": "created URL",
                  "shortUrl": "http://localhost:3000/"+url.customUrl
              });
            });
          });
        });
    }
  });
};

exports.getAllUrls = function(req,res){
  Url.find(function(err,urls){
    if(err){
        res.json({
          "result" : "ERROR",
          "message" : err
        });
    }
    res.json(urls);
  });
};

exports.deleteAll = function(req,res){
  const myquery = req.body;
  Url.deleteMany(myquery, function(err){
    if(err){
        res.json({
          "result": "ERROR",
          "message": err
        });
    }
    res.json({
        "result": "SUCCESS",
        "message": "삭제 성공"
    });
  })
};

//DB에 없는 URL을 customize
exports.makeKorean = function(req,res){
  let url = new Url(req.body);
  Url.find({status : 'created'})
    .sort({_id : -1})
    .exec(function(err, doc){
      if(err){
        res.json({
          "result": "ERROR",
          "message": err
        });
      }else{
        if(!doc[0])
          url._id = 100000;
        else
          url._id = doc[0]._id+1;
        url.save(function(err){
          if(err.code === 11000){
            res.json({
              "result": "ERROR",
              "code": err.code,
              "message": "중복된 주소입니다. 다른 주소를 입력해주세요."
            });
          }else{
            res.json({
              "result" : "SUCCESS",
              "message" : "한글 URL 생성 완료",
              "customUrl" : "http://localhost:3000/" + url.customUrl
            });
          }
        });
      }
    });
};

//DB에 존재하는 URL에 customize url
exports.putKorean = function(req,res){
  const url = new Url(req.body);
  Url.findOne({longUrl : url.longUrl}, function(err, doc){
    if(doc){
      doc.customUrl = url.customUrl;
      doc.save(function(err){
        if(err){
          res.json({
            "result":"ERROR",
            "message":err
          });
        }else{
          res.json({
            "result" : "SUCCESS",
            "message" : "한글 URL 생성 완료",
            "customUrl" : "http://localhost:3000/" + doc.customUrl
          });
        }
      });
    }else{
      res.json({
        "result":"ERROR",
        "message":err
      });
    }
  });
};

//DB에 존재하는지 확인
exports.isRegistered = function(req,res){
  const url = new Url(req.query);
  Url.findOne({longUrl : url.longUrl}, function(err, doc){
    if(doc){
      res.json({
        "result" : "SUCCESS",
        "message" : "found"
      });
    }else{
      res.json({
        "result" : "SUCCESS",
        "message" : "not found"
      });
    }
    if(err){
      res.json({
        "result" : "ERROR",
        "message" : err
      });
    }
  });
};

exports.getCount = function(req,res){
  //'localhost:3000/' 뒷부분만 입력 받는다.
  Url.findOne({customUrl : req.query.customUrl}, function(err, doc){
    if(err){
      res.json({
        "result" : "ERROR",
        "message" : err
      });
    }
    if(doc){
      res.json({
        "result" : "SUCCESS",
        "message" : "found in customUrl",
        "count" : doc.count
      });
    }else{
      algo.decoding(req.query.customUrl).then(function(decoded){ //short url이면 _id로 변환 후 검색
        Url.findOne({_id : decoded}, function(err2, doc2){
          if(err2){
            res.json({
              "result" : "ERROR",
              "message" : err
            });
          }
          if(doc2){
            res.json({
              "result" : "SUCCESS",
              "message" : "found in _id",
              "count" : doc2.count
            });
          }else{
            res.json({
              "result" : "FAILURE",
              "message" : "변환된 주소를 찾을 수 없습니다. 다시 입력해주세요."
            });
          }
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
