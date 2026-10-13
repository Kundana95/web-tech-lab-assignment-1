/* =========================================
   GREENFOLIO JAVASCRIPT
========================================= */


/* -----------------------------------------
   Button Interaction
----------------------------------------- */

function showMessage() {

    alert(
        "Hello! 🌿 Thanks for visiting my Greenfolio!"
    );

}


/* -----------------------------------------
   jQuery Animation
----------------------------------------- */

$(document).ready(function () {

    // Fade in the main content
    $("main").hide().fadeIn(1000);


    // Card hover animation
    $(".nature-card").hover(

        function () {

            $(this).css(
                "transform",
                "translateY(-8px)"
            );

        },

        function () {

            $(this).css(
                "transform",
                "translateY(0)"
            );

        }

    );


    // Small greeting in browser console
    console.log(
        "🌿 Welcome to Greenfolio!"
    );

});