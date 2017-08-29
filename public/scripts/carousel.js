'use strict';

(function(module) {
  const carousel = {};

function carouselAnimate() {
  var $active = $('#project-carousel img.active');

  if ($active.length === 0) $active = $('#project-carousel img:last');

  var $next = $active.next().length ? $active.next() : $('#project-carousel img:first');

  $active.addClass('last-active');

  $next.css({opacity: 0.0}).addClass('active').animate({opacity: 1.0}, 1000, function() {
    $active.removeClass('active last-active');
  });
}
$(function() {
  setInterval(carouselAnimate, 4000)
});

$(document).ready(function() {
  navList();
});
})(app);
