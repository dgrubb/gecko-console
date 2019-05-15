/* 
 * File: main.js
 * Author: dgrubb
 * Date: 05/13/2019
 *
 * Uses the Jquery .ready() callback to provide a starting point
 * for the rest of the application.
 */

$(document).ready(function() {

    $("#carousel_container").slick({
        centerMode: true,
        centerPadding: "50px",
        slidesToShow: 3,
        arrows: true,
        dots: true,
        focusOnSelect: true
    });

    Personality.loadCurrentPersonality();
});

