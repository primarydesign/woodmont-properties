$('.portfolio__thumbnail').on('click tap', function() {
    $('.property--selected').collapse('hide');
    setTimeout(function() {
        $('html,body').animate({
            scrollTop: $('#portfolio').offset().top
        }, 'slow');
    }, 10);
});
var thumbObj = new Object();
thumbObj.thumbList = '';
thumbObj.thumbArray = new Array();
$(function() {
    $('li.portfolio__type.LuxuryApartment').click();
    thumbObj.thumbList = $('li.portfolio__thumbnail.LuxuryApartment');
    for (i = 0; i < thumbObj.thumbList.length; i++) {
        thumbObj.thumbArray.push(thumbObj.thumbList[i].getAttribute('data-target'));
    };
});
var rebuildThumbArray = function(name) {
    thumbObj.thumbArray = new Array();
    thumbObj.thumbList = $('li.portfolio__thumbnail.' + name);
    for (i = 0; i < thumbObj.thumbList.length; i++) {
        thumbObj.thumbArray.push(thumbObj.thumbList[i].getAttribute('data-target'));
    };
};
$(".portfolio__prev-button").on('click tap', function() {
    var currentPropertyId = '#' + $('.property--selected.show').attr('id');
    var currentSelectedProperty = $('.property--selected.show');
    $('.property--selected').collapse('hide');
    var currentIndex = thumbObj.thumbArray.indexOf(currentPropertyId);
    var newIndex = currentIndex - 1;
    var maxIndex = thumbObj.thumbArray.length - 1;
    if (newIndex < 0) {
        newIndex = maxIndex;
    }
    var newPropertyId = thumbObj.thumbArray[newIndex];
    $(newPropertyId).collapse('show');
});
$(".portfolio__next-button").on('click tap', function() {
    var currentPropertyId = '#' + $('.property--selected.show').attr('id');
    var currentSelectedProperty = $('.property--selected.show');
    $('.property--selected').collapse('hide');
    var currentIndex = thumbObj.thumbArray.indexOf(currentPropertyId);
    var newIndex = currentIndex + 1;
    var maxIndex = thumbObj.thumbArray.length - 1;
    if (newIndex > maxIndex) {
        newIndex = 0;
    }
    var newPropertyId = thumbObj.thumbArray[newIndex];
    $(newPropertyId).collapse('show');
});
$('li.portfolio__type').on('click tap', function() {
    $('.property--selected').collapse('hide');
    $('li.portfolio__type').removeClass('active');
    $(this).addClass('active');
    var currentFilter = $(this).attr('class');
    var addVisibles = function(name) {
        $('.portfolio__thumbnail').removeClass('visible');
        $('.portfolio__thumbnail.' + name).addClass('visible');
    };
    var createArray = function(name) {
        var domElements = $('.portfolio__thumbnail.' + name);
    };
    if (currentFilter.indexOf('LuxuryApartment') !== -1) {
        addVisibles('LuxuryApartment');
        rebuildThumbArray('LuxuryApartment');
    } else if (currentFilter.indexOf('LuxuryHome') !== -1) {
        addVisibles('LuxuryHome');
        rebuildThumbArray('LuxuryHome');
    } else if (currentFilter.indexOf('Industrial') !== -1) {
        addVisibles('Industrial');
        rebuildThumbArray('Industrial');
    } else if (currentFilter.indexOf('OfficeRetail') !== -1) {
        addVisibles('OfficeRetail');
        rebuildThumbArray('OfficeRetail');
    } else if (currentFilter.indexOf('Hospitality') !== -1) {
        addVisibles('Hospitality');
        rebuildThumbArray('Hospitality');
    } else if (currentFilter.indexOf('all') !== -1) {
        $('.portfolio__thumbnail').addClass('visible');
    } else {
        return false;
    }
});
//headroom
$(function() {
    var myElement = document.querySelector("#mainNav");
    var headroom = new Headroom(myElement, { offset: 85 });
    headroom.init();
});
//pause video
$('body').on('hidden.bs.modal', '.modal', function() {
    $('video').trigger('pause');
});
