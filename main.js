$(function(){
  $('.menu-icon').click(function(){
    var $nav = $('.nav');
    $nav.slideToggle('fast');
});

$('.nav-list').click(function(){
  $('.nav').slideUp("fast");
})


$('#pageTop').click(function(){
  $('body,html').animate({
    scrollTop:0
  },800);
  return false;
});


var $arrow = $('.now-showing-title');
$arrow.click(function(){
  var $now = $('.movie-list');
  $now.toggle('fast');
});

var $arrow2 = $('.theater-title');
$arrow2.click(function(){
  var $theater = $('.theater-nav-list')
  $theater.toggle('fast');
});

var $arrow3 = $('.ticket-title');
$arrow3.click(function(){
  var $ticket = $('.ticket-contents')
  $ticket.toggle('fast');

});

var $arrow4 = $('.notice-title');
$arrow4.click(function(){
  var $notice = $('.notice-contents')
 $notice.toggle('fast');

});

var $arrow5 = $('.open-time-title');
$arrow5.click(function(){
  var $openTime = $('.open-time-contents')
$openTime.toggle('fast');

});

var $arrow6 = $('.poster-title');
$arrow6.click(function(){
  $('.slides').slideToggle('fast');
});

/*スライド*/
$('.change-btn').click(function(){
  var $active = $('.active');
  $active.removeClass('active');

  if ($(this).hasClass('next-btn')) {
    $active.next().addClass('active');
  } else if ($(this).hasClass('prev-btn')) {
    $active.prev().addClass('active');
  }

  var slideIndex = $('.slide').index($('.active'));
  $('.change-btn').show();

  if (slideIndex === 0) {
    $('.prev-btn').hide();
  } else if (slideIndex === 3) {
    $('.next-btn').hide();
  }

});


})
