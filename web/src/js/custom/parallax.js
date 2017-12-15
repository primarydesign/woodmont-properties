//parallax
// $('.section__header, .section__hero').parallax({imageSrc: '/app/themes/woodmont-props-child/assets/img/header-image_properties.jpg', zIndex: 1});

var parallax = function() {
  setTimeout(function() {
    $('.section__header h2, .section__hero h1').css({'z-index': 2, 'position': 'relative'});
    $('#our-company-header').parallax({imageSrc: '/app/themes/woodmont-props-child/assets/img/monotone/construction.jpg', zIndex: 1});
    $('#properties').parallax({imageSrc: '/app/themes/woodmont-props-child/assets/img/monotone/woodmont-metro-view.jpg', zIndex: 1});
    $('#careers-header').parallax({imageSrc: '/app/themes/woodmont-props-child/assets/img/monotone/woodmont-staff.jpg', zIndex: 1});
    $('#parallax-page-header').parallax({imageSrc: '/app/themes/woodmont-props-child/assets/img/monotone/luxury-apt-sofa.jpg', zIndex: 1});
    $('#awards-page-header').parallax({imageSrc: '/app/themes/woodmont-props-child/assets/img/monotone/lux-apt-common-area.jpg', zIndex: 1});
  }, 250);
};

var delay = 250, throttled = false;
window.addEventListener('resize', function() {
    if (!throttled) {
        parallax();
        throttled = true;
        setTimeout(function() {
            throttled = false;
        }, delay);
    }
});

parallax();

function onElementHeightChange(elm, callback){
    var lastHeight = elm.clientHeight, newHeight;
    (function run(){
        newHeight = elm.clientHeight;
        if( lastHeight != newHeight )
            callback();
        lastHeight = newHeight;

        if( elm.onElementHeightChangeTimer )
            clearTimeout(elm.onElementHeightChangeTimer);

        elm.onElementHeightChangeTimer = setTimeout(run, 200);
    })();
}
onElementHeightChange(document.body, function(){
    parallax();
    console.log('resized')
});
