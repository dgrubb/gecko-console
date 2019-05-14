/*
 * File: personality.js
 * Author: dgrubb
 * Date: 14/05/2019
 *
 * Provides an API for accessing personality related data.
 */

// Module includes
var exec = require("child_process").exec;
var express = require("express");
var path = require("path");
var httpCodes = require("http-codes");

// Variables
var parentDir = path.resolve(__dirname, "..");
var log = require(path.resolve(parentDir, "include", "log"));
var config = require(path.resolve(parentDir, "include", "config"));
var personality = require(path.resolve(parentDir, "include", "personality"));
var router = express.Router();

router.use(function(req, res, next) {
    next();
});

/******************************************************************************
 * Public API
 *****************************************************************************/

/**
 * Reboots the platform.
 *
 * GET
 *
 * /api/personality/personality
 */
router.get("/personality", function(req, res, next) {
    log.debug("GET /api/system/personality");
    personality.getPersonality

    exec("shutdown -r now", function(err, stdout, stderr) {
        if (err) {
            return res.status(httpCodes.INTERNAL_SERVER_ERROR).send();
        }
        return res.status(httpCodes.OK).send();
    });
});

/**
 * Restarts the background hardware worker service.
 *
 * GET
 *
 * /api/system/restart_service
 */
router.get("/restart_service", function(req, res, next) {
    log.debug("GET /api/system/restart_service");
    exec("systemctl restart gecko", function(err, stdout, stderr) {
        if (err) {
            return res.status(httpCodes.INTERNAL_SERVER_ERROR).send();
        }
        return res.status(httpCodes.OK).send();
    });
});

module.exports = router;
