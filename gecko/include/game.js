/*
 * File: game.js
 * Author: dgrubb
 * Date 15/05/2019
 */

// Module includes
var fs = require("fs");
var path = require("path");
var _ = require("underscore");
var gamepad = require("gamepad");
const { spawn }  = require("child_process");

// Variables
var parentDir = path.resolve(__dirname, "..");
var log = require(path.resolve(parentDir, "include", "log"));
var config = require(path.resolve(parentDir, "include", "config"));
var personality = require(path.resolve(parentDir, "include", "personality"));

var emulatorProcess = null;
var exitSequence = [];

/*******************************************************************************
 * Worker functions
 ******************************************************************************/

function launchGame(game) {
    var gameDesc = personality.getGameDescription(game);
    log.info(JSON.stringify(gameDesc));
    if (!gameDesc) {
        return false;
    }
    gamepad.init();
    exitSequence = personality.getPersonality().menuCombo;
    gamepad.on("down", function(id, num) {
        log.debug("Gamepad key down [ " + id + ": " + num + " ]");
        checkForExitSequence();
    });
    setInterval(gamepad.processEvents, 16);
    emulatorProcess = spawn(gameDesc.launchCommand, gameDesc.launchArguments);
    emulatorProcess.on("exit", code => {
        log.info("Emulator process exited");
    });

    emulatorProcess.on("close", code => {
        log.info("Emulator process closed");
    });
}

function stopGame() {
    log.info("Ending current emulator session");
    if (emulatorProcess) {
        emulatorProcess.stdin.pause();
        emulatorProcess.kill();
    }
    return true;
}

function checkForExitSequence() {
    var sequence = true;
    for (var j=0, l=gamepad.numDevices(); j<l; j++) {
        for (var i=0; i<exitSequence.length; i++) {
            if (!gamepad.deviceAtIndex[j].buttons[exitSequence[i]]) {
                sequence = false;
            }
        }
    }
    if (sequence) {
        stopGame();
    }
}

/*******************************************************************************
 * Public API
 ******************************************************************************/

module.exports.stopGame = function() {
    return stopGame();
};

module.exports.launchGame = function(game) {
    return launchGame(game);
};
