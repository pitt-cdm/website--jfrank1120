$(document).ready(function () {
    // Confirm that the script is connected to the web-page
    console.log("Script Loaded");
    // Attempting to change the height of the twitter feed
    $('#test_id').click(function () {
        $('#twitter_feed').data('data-height', '1000');
        console.log("Attempted to change height")
    });

    // Clicking on Jared Image on About Us will bring up Modal
    $('#overlay_icon').click(function () {
        let modal = document.getElementById('jaredModal');
        modal.style.display = 'block';
    });
    // Code for closing modal once it has appeared
    $('.close').click(function () {
        let modal = document.getElementById('jaredModal');
        modal.style.display = 'none';
    });
    // Code for Switching Themes via CSS Sheets
    $("#theme_btn").click(function () {
        // Get the current theme for the page
        let curr_theme = $("#style_link").attr("href");
        // Check if the theme is dark
        if (curr_theme === "CSS/Dark_Theme.css") {
            // If it's Dark Theme, switch it
            $("#style_link").attr("href", "CSS/Light_Theme.css");
        } else if (curr_theme === "CSS/Light_Theme.css") {
            // If its Light Theme, switch it
            $("#style_link").attr("href", "CSS/Dark_Theme.css");
        } else if (curr_theme === "../CSS/Dark_Theme.css") {
            // Check to see if the reference has '..' in it
            $("#style_link").attr("href", "../CSS/Light_Theme.css");
        } else if (curr_theme === "../CSS/Light_Theme.css"){
            $("#style_link").attr("href", "../CSS/Dark_Theme.css");
        }
    });

    // Accordion Code
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
}); // End Ready function