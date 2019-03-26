$(document).ready(function () {
    // Confirm that the script is connected to the web-page
    console.log("Script Loaded");
    // Attempting to change the height of the twitter feed
    $('#test_id').click(function () {
        $('#twitter_feed').data('data-height', '1000');
        console.log("Attempted to change height")
    });

    // Clicking on Jared Image on About Us will bring up Modal
    $('#jared_img').click(function () {
        let modal = document.getElementById('jaredModal');
        modal.style.display = 'block';
    });
    // Code for closing modal once it has appeared
    $('.close').click(function () {
        let modal = document.getElementById('jaredModal');
        modal.style.display = 'none';
    });
}); // End Ready function