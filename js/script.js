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