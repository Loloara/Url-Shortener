//첫 화면 -> shortenTap
$('#customTap').hide();
$('#analysisTap').hide();

$('#shortenMenu').click(function(){ //shorten 메뉴 클릭시 shortenTap show & 초기화
   $(this).addClass('active').siblings().removeClass('active');
   $('input').val('');
   $('.resultLabel').empty();

   $('#shortenTap').show();
   $('#customTap').hide();
   $('#analysisTap').hide();
});

$('#customMenu').click(function(){ //customize 메뉴 클릭시 customTap show & 초기화
   $(this).addClass('active').siblings().removeClass('active');
   $('input').val('');
   $('.resultLabel').empty();

   $('#shortenTap').hide();
   $('#customTap').show();
   $('#analysisTap').hide();
});

$('#analysisMenu').click(function(){ //analysis 메뉴 클릭시 analysisTap show & 초기화
   $(this).addClass('active').siblings().removeClass('active');
   $('input').val('');
   $('.resultLabel').empty();

   $('#shortenTap').hide();
   $('#customTap').hide();
   $('#analysisTap').show();
});

$('input').click(function(){ //input 박스 클릭시 value 초기화
  $(this).val('');
});
