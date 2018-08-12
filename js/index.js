$(document).ready(function(){


  $("#filters :checkbox").click(function() {
    $(".item").hide();
    $("#filters :checkbox:checked").each(function() {
        $("." + $(this).val()).show("slow");
    });
 });

})