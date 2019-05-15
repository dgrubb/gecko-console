/*
 * File: inputs.js
 * Author: dgrubb
 * Date: 15/05/2019
 *
 * Handle input and related events.
 */

const INPUT_LEFT_KEYCODE = 37;
const INPUT_RIGHT_KEYCODE = 39;
const INPUT_SELECT_KEYCODE = 13;

$(document).keydown(function(e) {
    switch (e.which) {
        case INPUT_LEFT_KEYCODE:
            Personality.decrementGameSelection();
            break;
        case INPUT_RIGHT_KEYCODE:
            Personality.incrementGameSelection();
            break;
        case INPUT_SELECT_KEYCODE:
            Personality.launchGame();
        default: ;
    }
});

