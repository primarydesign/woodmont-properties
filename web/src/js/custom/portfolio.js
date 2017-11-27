$('.portfolio__thumbnail').on('click tap', function() {

  $('.property--selected').collapse('hide');

});

$("a.portfolio__prev-button").on('click tap', function() {

  var currentPropertyId = '#' + $('.property--selected.show').attr('id');

  var currentSelectedProperty = $('.property--selected.show');

  $('.property--selected').collapse('hide');

  var thumbList = $('li.portfolio__thumbnail');

  var thumbArray = new Array();

  for (i = 0; i < thumbList.length; i++) {
    thumbArray.push(thumbList[i].getAttribute('data-target'));
  };

  var currentIndex = thumbArray.indexOf(currentPropertyId);

  var newIndex = currentIndex - 1;
  var maxIndex = thumbArray.length - 1;

  if (newIndex < 0) {
    newIndex = maxIndex;
  }

  var newPropertyId = thumbArray[newIndex];

  $(newPropertyId).collapse('show');

});

$("a.portfolio__next-button").on('click tap', function() {

      var currentPropertyId = '#' + $('.property--selected.show').attr('id');

      var currentSelectedProperty = $('.property--selected.show');

      $('.property--selected').collapse('hide');

      var thumbList = $('li.portfolio__thumbnail');

      var thumbArray = new Array();

      for (i = 0; i < thumbList.length; i++) {
        thumbArray.push(thumbList[i].getAttribute('data-target'));
      };

      var currentIndex = thumbArray.indexOf(currentPropertyId);

      var newIndex = currentIndex + 1;
      var maxIndex = thumbArray.length - 1;

      if (newIndex > maxIndex) {
        newIndex = 0;
      }

      var newPropertyId = thumbArray[newIndex];

      $(newPropertyId).collapse('show');

    });

    $('li.portfolio__type').on('click tap', function() {

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
        } else if (currentFilter.indexOf('LuxuryHome') !== -1) {
            addVisibles('LuxuryHome');
        } else if (currentFilter.indexOf('Industrial') !== -1) {
            addVisibles('Industrial');
        } else if (currentFilter.indexOf('OfficeRetail') !== -1) {
            addVisibles('OfficeRetail');
        } else if (currentFilter.indexOf('all') !== -1) {
            $('.portfolio__thumbnail').addClass('visible');
        } else {
            return false;
        }
    });
