$(function(){
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
