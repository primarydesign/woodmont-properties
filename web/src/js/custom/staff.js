$('.modal .carousel-control-prev-icon').on('click tap', function() {

	var staffList = $('.staff-thumbnail.visible');

    var idArray = new Array();

    for (i = 0; i < staffList.length; i++) {

        idArray.push(staffList[i].getAttribute('data-target'));

    };

    var currentStaffId = '#' + $('.modal.show').attr('id');

    var currentModal = $('.modal.show');

    var currentIndex = idArray.indexOf(currentStaffId);

    var newIndex = currentIndex - 1;

    var maxIndex = idArray.length - 1;

    if(newIndex < 0) {
    	newIndex = maxIndex;
    } else if (newIndex > maxIndex ) {
    	newIndex = 0;
    } else {

    };

    var newItemId = idArray[newIndex];

    currentModal.modal('hide');

    $(newItemId).modal('show');

});

$('.modal .carousel-control-next-icon').on('click tap', function() {

    var staffList = $('.staff-thumbnail.visible');

    var idArray = new Array();

    for (i = 0; i < staffList.length; i++) {

        idArray.push(staffList[i].getAttribute('data-target'));

    };

    var currentStaffId = '#' + $('.modal.show').attr('id');

    var currentModal = $('.modal.show');

    var currentIndex = idArray.indexOf(currentStaffId);

    var newIndex = currentIndex + 1;

    var maxIndex = idArray.length - 1;

    if(newIndex < 0) {
    	newIndex = maxIndex;
    } else if (newIndex > maxIndex ) {
    	newIndex = 0;
    } else {

    };

    var newItemId = idArray[newIndex];

    currentModal.modal('hide');

    $(newItemId).modal('show');

});

$(function() {
    $('li.staff__type-label.principals').click();
});

$('li.staff__type-label').on('click tap', function() {

    $('li.staff__type-label').removeClass('active');
    $(this).addClass('active');

    var currentItem = $(this).attr('class');
    var addVisible = function(name) {
        $('.staff-thumbnail').removeClass('visible');
        $('.staff-thumbnail.' + name).addClass('visible');
    };

    var createArray = function(name) {
        var domElements = $('.staff-thumbnail.' + name);
    };

    if (currentItem.indexOf('principals') !== -1) {
        addVisible('principals');
    } else if (currentItem.indexOf('executives') !== -1) {
        addVisible('executives');
    } else if (currentItem.indexOf('management') !== -1) {
        addVisible('management');
    } else if (currentItem.indexOf('all') !== -1) {
        $('.staff-thumbnail').addClass('visible');
    } else {
        return false;
    }
});
