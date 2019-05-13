/*
 * File: usb.js
 * Author: dgrubb
 * Date 13/05/2019
 */

// Module includes
var usb = require("usb");
var path = require("path");
var udev = require("udev");
var _ = require("underscore");

// Variables
var parentDir = path.resolve(__dirname, "..");
var log = require(path.resolve(parentDir, "include", "log"));

/*******************************************************************************
 * Worker functions
 ******************************************************************************/

/**
 * Get all devices listed by udev of a specified subsystem.
 *
 * @param {string}  subsystem   Subsystem to list (e.g., "usbhid", "tty" etc).
 * @returns {array}    List of objects describing each device in classification.
 */
function getSubsystemListFromUDev(subsystem) {
    var list = _.where(udev.list(), {SUBSYSTEM: subsystem});
    if (!list) {
        log.error("Unable to find subsystem devices from udev: " + subsystem);
    }
    return list;
}

/*******************************************************************************
 * Event callbacks
 ******************************************************************************/

usb.on("attach", function(usbdevice) {
});

usb.on("detach", function(usbdevice) {
});

/*******************************************************************************
 * Public API
 ******************************************************************************/

module.exports.getDeviceList = function() {
    log.verbose("USB::getDeviceList");
    return usb.getDeviceList();
};

module.exports.getDeviceListBySubsystem = function(subsystem) {
    log.verbose("USB::getDeviceListBySubsystem");
    return getSubsystemListFromUDev(subsystem);
};
