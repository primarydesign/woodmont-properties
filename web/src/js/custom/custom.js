//headroom.js
$(function() {
    var myElement = document.querySelector("#mainNav");
    var headroom = new Headroom(myElement, { offset: 85 });
    headroom.init();
});
//pause video
$('body').on('hidden.bs.modal', '.modal', function() {
    $('video').trigger('pause');
});

// hide dropdowns on mobile after tapping
$('.nav-item--dropdown, .portfolio__type--dropdown').on('mouseenter', function() {
  $(this).addClass("open");
});

$('.nav-item--dropdown, .portfolio__type--dropdown').on('mouseleave', function() {
  $(this).removeClass("open");
});

$('.nav-item--dropdown, .portfolio__type--dropdown').on('click tap', function() {
  $(this).toggleClass("open");
});
