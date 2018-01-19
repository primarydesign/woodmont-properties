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

//detect height change - WIP

// $('.nav-item--dropdown').on('click tap',function(){
//
//   $('.dropdown-menu').addEventListener('click tap', dropdownCloser, false);
//   $('.dropdown-menu').show();
// });
//
// function dropdownCloser(e){
//   if(e.target.class != 'dropdown-menu'){
//      document.body.removeEventListener('click tap', dropdownCloser, false);
//      $('.dropdown-menu').hide();
//   }
// }
