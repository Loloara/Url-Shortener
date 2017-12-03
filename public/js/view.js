$('#customTap').hide();
$('#analysisTap').hide();

$('#shortenButton').click(function(){
  $.ajax({
    'url':'/api/shorten',
    'type':'POST',
    'dataType':'json',
    'data':{'longUrl':$('#longUrlInput').val()},
    'success':  function(result){
        if(result['result'] === 'SUCCESS'){
            console.log(result['customUrl']);
            $('#shortUrlLabel').html("<a href= \"" + result['customUrl'] +"\">" +result['customUrl']+"</a>");
        }
        else{
            console.log(result);
            $('#shortUrlLabel').html(result['message']);
        }
    }
  });
});

$('#customButton').click(function(){
  $.ajax({
    'url':'/api/shorten',
    'type':'POST',
    'dataType':'json',
    'data':{'longUrl':$('#longUrlInput').val()},
    'success':  function(result){
        if(result['result'] === 'SUCCESS'){
            console.log(result['customUrl']);
            $('#shortUrlLabel').html("<a href= \"" + result['customUrl'] +"\">" +result['customUrl']+"</a>");
        }
        else{
            console.log(result);
            $('#shortUrlLabel').html(result['message']);
        }
    }
  });
});

$('#analysisButton').click(function(){
  $.ajax({
    'url':'/api/shorten',
    'type':'POST',
    'dataType':'json',
    'data':{'longUrl':$('#longUrlInput').val()},
    'success':  function(result){
        if(result['result'] === 'SUCCESS'){
            console.log(result['customUrl']);
            $('#shortUrlLabel').html("<a href= \"" + result['customUrl'] +"\">" +result['customUrl']+"</a>");
        }
        else{
            console.log(result);
            $('#shortUrlLabel').html(result['message']);
        }
    }
  });
});

$('#shortenMenu').click(function(){
   $(this).addClass('active').siblings().removeClass('active');
   $('#shortenTap').show();
   $('#customTap').hide();
   $('#analysisTap').hide();
});

$('#customMenu').click(function(){
   $(this).addClass('active').siblings().removeClass('active');
   $('#shortenTap').hide();
   $('#customTap').show();
   $('#analysisTap').hide();
});

$('#analysisMenu').click(function(){
   $(this).addClass('active').siblings().removeClass('active');
   $('#shortenTap').hide();
   $('#customTap').hide();
   $('#analysisTap').show();
});
