/*
 * File: personality.js
 * Author: dgrubb
 * Date: 14/05/2019
 *
 * Defines functions for processing personality profiles.
 */

var Personality = (function() {
    'use strict';

    var personality = null;
    var gameIdx = 0;

    function loadCurrentPersonality() {
        API.getCurrentPersonality(function(resp, status) {
            if (!API.validateResponse(resp, status) || !resp.responseJSON) {
                console.error("Invalid response to personality request");
                return false;
            }
            personality = resp.responseJSON;
            if (personality.backgroundCSS) {
                setBackground(personality.backgroundCSS);
            }
            if (personality.logoPath) {
                setLogo(personality.logoPath);
            }
            if (personality.emblemPath) {
                setEmblem(personality.emblemPath);
            }
            if (personality.gameList && personality.gameList.length) {
                setGameLibrary(personality.gameList);
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

    function setEmblem(emblem_src) {
        console.log("Setting emblem: " + emblem_src);
        $("#emblem_logo").css("background-image", "url('" + emblem_src + "')");
    }

    function setSummaryText(name, releaseDate, developer) {
        console.log("Setting summary text");
        var text = name + "\n";
        text += releaseDate + "\n";
        text += developer;
        $("#footer_menu").text(text);
    }

    function setGameLibrary(gameList) {
        console.log("Updating game library");
        for (var i=0; i<gameList.length; i++) {
            insertGame(gameList[i]);
        }
        $("#carousel_container").slick({
            centerMode: true,
            centerPadding: "50px",
            slidesToShow: 3,
            arrows: true,
            dots: true,
            focusOnSelect: true
        });
        gameIdx = $("#carousel_container").slick("slickCurrentSlide");
        updateSummary();
    }

    function updateSummary() {
        if ((gameIdx > personality.gameList.length) || (gameIdx < 0)) {
            console.error("Game index [ " +
                            gameIdx +
                            " ] outside game list bounds, length: " +
                            personality.gameList.length);
            return;
        }
        setSummaryText(
            personality.gameList[gameIdx].name,
            personality.gameList[gameIdx].releaseDate,
            personality.gameList[gameIdx].developer
        );
    }

    function insertGame(game) {
        console.log("Inserting game: " + game.name);
        $("#carousel_container").append(
            $("<div />").append(
                $("<img />", {
                    id: game.name,
                    src: game.boxArt
                })
            )
        );
    }

    function incrementGameSelection() {
        $("#carousel_container").slick("slickNext");
        gameIdx = $("#carousel_container").slick("slickCurrentSlide");
        updateSummary();
    }

    function decrementGameSelection() {
        $("#carousel_container").slick("slickPrev");
        gameIdx = $("#carousel_container").slick("slickCurrentSlide");
        updateSummary();
    }

    function launchGame() {
        if ((gameIdx > personality.gameList.length) || (gameIdx < 0)) {
            console.error("Game index [ " +
                            gameIdx +
                            " ] outside game list bounds, length: " +
                            personality.gameList.length);
            return;
        }
        API.launchGame(personality.gameList[gameIdx].name, function(resp, status) {
        });
    }

    var api = {
        decrementGameSelection: decrementGameSelection,
        incrementGameSelection: incrementGameSelection,
        launchGame: launchGame,
        loadCurrentPersonality: loadCurrentPersonality
    };

    return api;
}());
