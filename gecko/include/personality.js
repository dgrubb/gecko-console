/*
 * File: personality.js
 * Author: dgrubb
 * Date 14/05/2019
 */

// Module includes
var fs = require("fs");
var path = require("path");
var _ = require("underscore");

// Variables
var parentDir = path.resolve(__dirname, "..");
var log = require(path.resolve(parentDir, "include", "log"));
var config = require(path.resolve(parentDir, "include", "config"));
var usb = require(path.resolve(parentDir, "include", "usb"));

var personalities = [];
var currentPersonality;

/*******************************************************************************
 * Worker functions
 ******************************************************************************/

function derivePersonality(callback) {
    currentPersonality = _.find(personalities, function(personality) {
        return usb.isDeviceConnected(personality.controller.vid, personality.controller.pid);
    });
    if (currentPersonality) {
        log.info("System personality set to: " + currentPersonality.name);
        callback(null);
    } else {
        var error = "Unable to derive pesonality";
        log.error(error);
        callback(error);
    }
}

function validateFile(filename) {
    var fileMatch = new RegExp(/^\w+\.js/g);
    return fileMatch.test(filename);
}

function loadPersonalityList(callback) {
    fs.readdir(path.resolve(parentDir, "personalities"), function(err, files) {
        files.forEach(function(file) {
            if (validateFile(file)) {
                log.info("Loading personality file: " + file);
                personalities.push(require(path.resolve(parentDir, "personalities", file)));
            }
        });
        callback(null, personalities.length);
    });
}

/*******************************************************************************
 * Public API
 ******************************************************************************/

module.exports.getPersonality = function() {
    log.verbose("Personality::getPersonality");
    return currentPersonality;
};

module.exports.loadPersonalityList = function(callback) {
    log.verbose("Personality::loadPersonalityList");
    loadPersonalityList(callback);
};

module.exports.derivePersonality = function(callback) {
    log.verbose("Personality::derivePersonality");
    derivePersonality(callback);
};

module.exports.getPersonalityList = function() {
    log.verbose("Personality::getPersonalityList");
    return personalities;
};
