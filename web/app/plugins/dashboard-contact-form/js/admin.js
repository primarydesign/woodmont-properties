jQuery( document ).ready(function($) {
    //if(is_input_checked(".input_blog")) { $("#input_blog").prop("checked",true); }
    //if(is_input_checked(".input_enable_blog")) { $("#input_enable_blog").prop("checked",true); }
$("#input_blog").click(function(){
   var checked = $(this).is(":checked");
    $(".input_blog").each(function(){ 
        $(this).prop("checked",checked); 
    });
});
$("#input_enable_blog").click(function(){
   var checked = $(this).is(":checked");
    $(".input_enable_blog").each(function(){ 
        $(this).prop("checked",checked); 
    });
});
function is_input_checked(selector){
    
    if($(selector).length > 0) {
    var checked = true;
    $(selector).each(function(){
        checked = checked && $(this).is(":checked");
    });
    return checked;
    }
    else return false;
}
});