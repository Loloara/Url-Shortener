const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const UrlSchema = new Schema({
    _id : Number,
    longUrl : {
      type : String,
      trim : true,
      required : true,
      set : function(url){
          if(url.indexOf('http://') !== 0 && url.indexOf('https://') !==0){
            url = 'http://' + url;  //http://나 https:// 가 없을 시 붙여준다.
          }
          if(url.endsWith('/')){    // 마지막에 / 붙은거 확인 -> 동일시 한다.
            url = url.substr(0, url.length-1);
          }
          return url;
        },
        unique : true
    },
    customUrl: {
      type : String,
      unique: true
    },
    created : {
      type : Date,
      default : Date.now
    },
    status : {
      type : String //created, removed
    }
}, {versionKey: false});

mongoose.model('Url', UrlSchema);
