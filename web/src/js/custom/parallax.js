//parallax
// $('.section__header, .section__hero').parallax({imageSrc: '/app/themes/woodmont-props-child/assets/img/header-image_properties.jpg', zIndex: 1});


setTimeout(function() {
  $('.section__header h2, .section__hero h1').css({'z-index': 2, 'position': 'relative'});
  $('#our-company-header').parallax({imageSrc: '/app/themes/woodmont-props-child/assets/img/monotone/construction.jpg', zIndex: 1});
  $('#properties').parallax({imageSrc: '/app/themes/woodmont-props-child/assets/img/monotone/woodmont-metro-view.jpg', zIndex: 1});
  $('#careers-header').parallax({imageSrc: '/app/themes/woodmont-props-child/assets/img/monotone/woodmont-staff.jpg', zIndex: 1});
  $('#parallax-page-header').parallax({imageSrc: '/app/themes/woodmont-props-child/assets/img/monotone/luxury-apt-sofa.jpg', zIndex: 1});
  $('#awards-page-header').parallax({imageSrc: '/app/themes/woodmont-props-child/assets/img/monotone/lux-apt-common-area.jpg', zIndex: 1});
}, 250);
