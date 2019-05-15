/*
 * File: personality.js
 * Author: dgrubb
 * Date: 14/05/2019
 *
 * Defines functions for processing personality profiles.
 */

var Personality = (function() {
    'use strict';

    var currentPersonality = null;

    function loadCurrentPersonality() {
        API.getCurrentPersonality(function(resp, status) {
            if (!API.validateResponse(resp, status) || !resp.responseJSON) {
                console.error("Invalid response to personality request");
                return false;
            }
            if (resp.responseJSON.backgroundCSS) {
                setBackground(resp.responseJSON.backgroundCSS);
            }
            if (resp.responseJSON.logoPath) {
                setLogo(resp.responseJSON.logoPath);
            }
        });
    }

    function setBackground(background_css) {
        $("body").css("background", background_css);
    }

    function setLogo(logo_src) {
        console.log("Setting logo: " + logo_src);
        $("#top_logo").css("background-image", "url('" + logo_src + "')");
    }

    var api = {
        loadCurrentPersonality: loadCurrentPersonality
    };

    return api;
}());
