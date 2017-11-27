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
