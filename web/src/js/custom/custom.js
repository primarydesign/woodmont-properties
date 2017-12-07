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
