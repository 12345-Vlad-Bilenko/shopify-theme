$(document).ready(function() {
    $('.card__content').on('mouseenter', function() {
      $('#fixed-rectangle').addClass('hovered');
    });
  
    $('.card__content').on('mouseleave', function() {
      $('#fixed-rectangle').removeClass('hovered');
    });
  });