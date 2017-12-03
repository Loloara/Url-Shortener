$('#customTap').hide();
$('#analysisTap').hide();

$('#shortenMenu').click(function(){
   $(this).addClass('active').siblings().removeClass('active');
   $('input').val('');
   $('.resultLabel').empty();

   $('#shortenTap').show();
   $('#customTap').hide();
   $('#analysisTap').hide();
});

$('#customMenu').click(function(){
   $(this).addClass('active').siblings().removeClass('active');
   $('input').val('');
   $('.resultLabel').empty();

   $('#shortenTap').hide();
   $('#customTap').show();
   $('#analysisTap').hide();
});

$('#analysisMenu').click(function(){
   $(this).addClass('active').siblings().removeClass('active');
   $('input').val('');
   $('.resultLabel').empty();

   $('#shortenTap').hide();
   $('#customTap').hide();
   $('#analysisTap').show();
});

$('input').click(function(){
  $(this).val('');
});
