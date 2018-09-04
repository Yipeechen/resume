$('.js--scroll-to-skills').click(function () { 
  $('html, body').animate({ 
    scrollTop: $('.section-skills').offset().top
  }, 1000);
});

$('.js--scroll-to-works').click(function () { 
  $('html, body').animate({
    scrollTop: $('.section-works').offset().top
  }, 1000);
});

// SlideMessage
var $window = $(window);
var $slideMes = $('#slide-message');
var endZone = $('.section-contact').offset().top - $window.height() - 100;

$window.on('scroll', function() {
  if (endZone < $window.scrollTop() ) {   // fadeIn
    $slideMes.animate({
      'right': '0px'
    }, 500);
  } else {
    $slideMes.stop(true).animate({  // fadeOut
      'right': '-25rem'
    }, 250);
  }
});