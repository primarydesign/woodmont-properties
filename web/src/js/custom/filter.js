$(function() {
    $('li.staff__type-label.principals').click();
});


$('.modal .carousel-control-prev-icon').on('click tap', function() {

});

$('.modal .carousel-control-prev-icon').on('click tap', function() {

    var staffList = $('.staff-thumbnail.visible');
    console.log(staffList);

    var idArray = new Array();

    for (i = 0; i < staffList.length; i++) {

        idArray.push(staffList[i].getAttribute('data-target'));

    }

    var currentStaffId = $('.modal.show').attr('id');
    console.log(currentStaffId);

    var currentModal = $('.modal.show');
    console.log(currentModal);

    var currentIndex = idArray.indexOf(currentStaffId);
    console.log(currentIndex);

    var newIndex = currentIndex - 1;
    console.log(newIndex);

    var newItemId = idArray[newIndex];
    console.log(newItemId);

    currentModal.removeClass('show');

    $(newItemId).addClass('show');

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
