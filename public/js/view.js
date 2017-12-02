$('#shortenButton').click(function(){
  $.ajax({
    'url':'/api/shorten',
    'type':'POST',
    'dataType':'json',
    'data':{'longUrl':$('#longUrl').val()},
    'success':  function(result){
        if(result['result'] === 'SUCCESS'){
            console.log(result['customUrl']);
            $('#shortUrl').html("<a href= \"" + result['customUrl'] +"\">" +result['customUrl']+"</a>");
        }
        else{
            console.log(result);
            $('#shortUrl').html(result['message']);
        }
    }
  });
});
