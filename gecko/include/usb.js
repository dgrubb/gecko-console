/*
 * File: usb.js
 * Author: dgrubb
 * Date 13/05/2019
 */

// Module includes
var usb = require("usb");
var path = require("path");
var _ = require("underscore");

// Variables
var parentDir = path.resolve(__dirname, "..");
var log = require(path.resolve(parentDir, "include", "log"));

/*******************************************************************************
 * Worker functions
 ******************************************************************************/

function isDeviceConnected(vid, pid) {
    log.verbose("USB::isDeviceConnected");
    var retVal = false;
    _.each(usb.getDeviceList(), function(device) {
        if (device.deviceDescriptor.idVendor == vid && device.deviceDescriptor.idProduct == pid) {
            retVal = true;
        }
    });
    return retVal;
};

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

module.exports.getIsControllerConnected = function(controller) {
    log.verbose("USB::getController");
    return isDeviceConnected(controller.vid, controller.pid);
};
