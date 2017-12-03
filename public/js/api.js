$('#shortenButton').click(function(){
  $.ajax({
    'url':'/api/shorten',
    'type':'POST',
    'dataType':'json',
    'data':{'longUrl':$('#longUrlInput').val()},
    'success':  function(result){
        if(result['result'] === 'SUCCESS')
            $('#shortUrlLabel').html("<a href= \"" + result['shortUrl'] +"\">" +result['shortUrl']+"</a>");
        else
            $('#shortUrlLabel').html(result['message']);
    }
  });
});

$('#customButton').click(function(){
  $.ajax({  //변환한적 있는 URL인지 확인
    'url':'/api/korean',
    'type':'GET',
    'dataType':'json',
    'data':{'longUrl':$('#originalUrlInput').val()},
    'success':  function(result){
        if(result['result'] === 'SUCCESS'){
            if(result['message'] === 'not found'){    //변환한적 없는 URL
              $.ajax({  //DB에 새로운 URL 저장 및 custom url 셋팅
                'url':'/api/korean',
                'type':'POST',
                'dataType':'json',
                'data':{'longUrl':$('#originalUrlInput').val(), 'customUrl':$('#koreanUrlInput').val()},
                'success': function(result2){
                  if(result2['result'] === 'SUCCESS'){
                      $('#customUrlLabel').html("<a href= \"" + result2['customUrl'] +"\">" +result2['customUrl']+"</a>");
                    }
                  else
                      $('#customUrlLabel').html(result2['message']);
                }
              });
            }else{
              $.ajax({
                'url':'/api/korean',
                'type':'PUT',
                'dataType':'json',
                'data':{'longUrl':$('#originalUrlInput').val(), 'customUrl':$('#koreanUrlInput').val()},
                'success': function(result2){
                  if(result2['result'] === 'SUCCESS'){
                      $('#customUrlLabel').html("<a href= \"" + result2['customUrl'] +"\">" +result2['customUrl']+"</a>");
                    }
                  else
                      $('#customUrlLabel').html(result2['message']);
                }
              });
            }
        }
        else{
            $('#customUrlLabel').html(result['message']);
        }
    }
  });
});

$('#analysisButton').click(function(){
  $.ajax({
    'url':'/api/analysis',
    'type':'GET',
    'dataType':'json',
    'data':{'customUrl':$('#customUrlInput').val()},
    'success':  function(result){
        if(result['result'] === 'SUCCESS')
            $('#analysisLabel').html('http://localhost:3000/'+ $('#customUrlInput').val() +' 로 방문한 횟수: '+result['count'] + '번');
        else
            $('#analysisLabel').html(result['message']);
    }
  });
});
