/*
 * File: api.js
 * Author: dgrubb
 * Date: 05/13/2019
 *
 * Defines available API functions provided by the Gecko service.
 */

var API = (function() {
    'use strict';

    function rebootSystem(callback) {
        Network.get(
            "/api/system/reboot",
            {},
            callback
        );
    }

    function restartService(callback) {
        Network.get(
            "/api/system/restart_service",
            {},
            callback
        );
    }

    function getCurrentPersonality(callback) {
        Network.get(
            "/api/personality/personality",
            {},
            callback
        );
    }

    function launchGame(game, callback) {
        Network.post(
            "/api/personality/launch",
            { game: game },
            callback
        )
    }

    function validateResponse(resp, status) {
        if ("success" != status) {
            console.error(
                "Error validating response. AJAX status not successful: " +
                status
            );
            return false;
        }
        if (!resp || !(resp.responseJSON || resp.responseText)) {
            console.error("Error validating response, no message payload.");
            return false;
        }
        return true;
    }

    var api = {
        getCurrentPersonality: getCurrentPersonality,
        launchGame: launchGame,
        rebootSystem: rebootSystem,
        restartService: restartService,
        validateResponse: validateResponse
    };

    return api;
}());

