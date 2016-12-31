$(document).ready(function() {
  var actualFocusValue;
  $('input[type="text"]').add($('input[type="email"]')).on('focus', function() {
    actualFocusValue = $(this).attr('value');
    $(this).attr('value', '');
  });
  $('input[type="text"]').add($('input[type="email"]')).on('blur', function() {
    $(this).attr('value', actualFocusValue);
  });
  $('textarea').on('focus', function () {
    actualFocusValue = $(this).html();
    $(this).html('');
  });
  $('textarea').on('blur', function () {
    $(this).html(actualFocusValue);
  });
  
  // owl
  var instagramCarousel = $("#owl-instagram");
  
  instagramCarousel.owlCarousel({
    items: 7,
    itemsDesktopSmall: [1199,5],
    itemsTablet: [991,2],
    itemsTabletSmall: [768,2],
    itemsMobile: [479,2],
    
    autoPlay: 3000,
    pagination: false
  });
  
});
