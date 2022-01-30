//Makes dropdown open on hover and sets how many months are
// shown at a time (4).
$(function(){
    $("#selectMonth").hover(function() {
        $(this).attr('size', 4);
    },
    function() {
        $(this).attr('size', 1);
    });
});