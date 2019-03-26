$(document).ready(function () {
    console.log("Script Loaded");
    $('#test_id').click(function () {
        $('#twitter_feed').data('data-height', '1000');
        console.log("Attempted to change height")
    });
    console.log("Run through hover");
    // Clicking on Image of Jared directs to personal site
    $('#jared_img').click(function () {
        var modal = document.getElementById('jaredModal');
        modal.style.display = 'block';
    });
    $('.close').click(function () {
       var modal = document.getElementById('jaredModal');
       modal.style.display = 'none';
    });
}); // End Ready function