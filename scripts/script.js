 $(document).ready(function(){
var sections= $('section');
var nav= $('nav');
var nav_height= nav.outerHeight();
var landing_page_height = $('#landing-page').outerHeight();
var block_ini_height = $(".background-block").height();

$(window).on('scroll',function(){
  var landing_page_height = $('#landing-page').outerHeight();
  var cur_pos = $(this).scrollTop();
  var scroll_amt = ((cur_pos + $(this).height()) / $(document).height()) * 100 + '%';
  $(".background-block").css("width", scroll_amt);
  console.log(scroll_amt);
  if(cur_pos> (7/8)*landing_page_height)
  {
    nav.addClass('view');
  }
  else{
    nav.removeClass('view');
  }
  sections.each(function(){
    var top = $(this).offset().top;
    var bottom = top + $(this).outerHeight();
    if( cur_pos >= top && cur_pos <= bottom )
    {
      nav.find('a').removeClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
    if(cur_pos + $(window).height() >= ($(document).height() - 50) )
    {
      nav.find('a').removeClass('active');
      nav.find('a[href="#contact"]').addClass('active');
      $(".background-block").css("height", $("#contact").innerHeight());
    }
    else{
      $(".background-block").css("height", block_ini_height);
    }
  });
});
});
