$(document).ready(function () {
    console.log("Script Loaded");
    $("#info_box").hover(
        function() {
            $(this).next().show();
        },
        function () {
            $(this).next().hide();
        }
    ); // End Toggle
}); // End Ready function