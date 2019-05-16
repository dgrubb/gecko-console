/* 
 * File: main.js
 * Author: dgrubb
 * Date: 05/13/2019
 *
 * Uses the Jquery .ready() callback to provide a starting point
 * for the rest of the application.
 */

var gamepadState = {
    left: false,
    right: false,
    select: false
}

var emulationRunning = false;

function frameUpdate() {

    if (!Personality.getSet() || emulationRunning) {
        requestAnimationFrame(frameUpdate);
        return false;
    }

    var gamepads = navigator.getGamepads();
    var controls = Personality.getControls();

    for (var i=0; i<gamepads.length; i++) {
        if ((gamepads[i] === null) || (!gamepads[i].connected)) {
            continue;
        }
        if (controls.left.axis) {
            var left_pressed = (gamepads[i].axes[controls.left.id] == controls.left.val);
            if (left_pressed != gamepadState.left) {
                gamepadState.left = left_pressed;
                if (gamepadState.left) {
                    console.log("Left button");
                    Personality.decrementGameSelection();
                }
            }
        } else {
            if (gamepads[i].buttons[controls.left.id].pressed != gamepadState.left) {
                gamepadState.left = gamepads[i].buttons[controls.left.id].pressed;
                if (gamepadState.left) {
                    console.log("Left button");
                    Personality.decrementGameSelection();
                }
            }
        }
        if (controls.right.axis) {
            var right_pressed = (gamepads[i].axes[controls.right.id] == controls.right.val);
            if (right_pressed != gamepadState.right) {
                gamepadState.right = right_pressed;
                if (gamepadState.right) {
                    console.log("Right button");
                    Personality.incrementGameSelection();
                }
            }
        } else {
            if (gamepads[i].buttons[controls.right.id].pressed != gamepadState.right) {
                gamepadState.right = gamepads[i].buttons[controls.right.id].pressed;
                if (gamepadState.right) {
                    console.log("Right button");
                    Personality.incrementGameSelection();
                }
            }
        }
        if (controls.select.axis) {
            if (gamepads[i].axes[controls.select.id] == controls.select.val) {
                console.log("Select axis");
                Personality.launchGame();
            }
        } else {
            if (gamepads[i].buttons[controls.select.id].pressed != gamepadState.select) {
                gamepadState.select = gamepads[i].buttons[controls.select.id].pressed;
                if (gamepadState.select) {
                    console.log("Select button");
                    Personality.launchGame();
                }
            }
        }
    }

    requestAnimationFrame(frameUpdate);
}

function updateEmulationState() {
    API.getEmulationState(function(resp, status) {
        if (!API.validateResponse(resp, status)) {
            console.error("Failed to get emulation state");
            setTimeout(updateEmulationState, 1000);
            return false;
        }
        if (resp.responseText === "true") {
            emulationRunning = true;
        } else {
            emulationRunning = false;
        }
        setTimeout(updateEmulationState, 1000);
    });
}

$(document).ready(function() {
    Personality.loadCurrentPersonality();
    requestAnimationFrame(frameUpdate);
    updateEmulationState();
});

