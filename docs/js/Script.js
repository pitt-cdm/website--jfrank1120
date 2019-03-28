$(document).ready(function () {
    // Confirm that the script is connected to the web-page
    console.log("Script Loaded");
    console.log(sessionStorage.getItem("CSS"));
    /*
    if (sessionStorage.getItem("CSS") === "Dark_Theme") {
        try {
            $("#style_link").attr("href", "CSS/Dark_Theme.css");
        } catch (err) {

        } finally {
            $("#style_link").attr("href", "../CSS/Dark_Theme.css");
        }
    }
    */
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
            // Setting session storage to light-theme
            /*
            sessionStorage.removeItem("CSS");
            sessionStorage.setItem("CSS", "Light_Theme");
            */
            // Changing Twitter Theme
            /*
            $("#twitter_feed").remove();
            $(".recent_news_box").append('<a id="twitter_feed" class="twitter-timeline col-sm-4" data-height="400" data-theme="dark" href="https://twitter.com/Spotify?ref_src=twsrc%5Etfw"></a>');
            console.log("Attempted to add feed back in");
            */
        } else if (curr_theme === "CSS/Light_Theme.css") {
            // If its Light Theme, switch it
            $("#style_link").attr("href", "CSS/Dark_Theme.css");
            // Setting session storage to dark-theme
            /*
            sessionStorage.removeItem("CSS");
            sessionStorage.setItem("CSS", "Dark_Theme");
            */
            // Changing Twitter Theme
            /*
            $("#twitter_feed").remove();
            $(".recent_news_box").wrapInner('<a id="twitter_feed" class="twitter-timeline col-sm-4" data-height="400" data-theme="light" href="https://twitter.com/Spotify?ref_src=twsrc%5Etfw"></a>');
            */
        } else if (curr_theme === "../CSS/Dark_Theme.css") {
            // Check to see if the reference has '..' in it
            $("#style_link").attr("href", "../CSS/Light_Theme.css");
            sessionStorage.removeItem("CSS");
            sessionStorage.setItem("CSS", "../Light_Theme");
        } else if (curr_theme === "../CSS/Light_Theme.css"){
            // Changing Theme
            $("#style_link").attr("href", "../CSS/Dark_Theme.css");
            // Setting session storage to dark theme
            /*
            sessionStorage.removeItem("CSS");
            sessionStorage.setItem("CSS", "Dark_Theme");
            */
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