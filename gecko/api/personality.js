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
    log.debug("GET /api/personality/personality");
    return res.status(httpCodes.OK).send(personality.getPersonality());
});

router.post("/launch", function(req, res, next) {
    log.debug("POST /api/personality/launch");
    if (!req.body || !req.body.game) {
        log.error("Game launch requested without name");
        return res.status(httpCodes.BAD_REQUEST).send("No game specified");
    }
    log.info("Requesting to launch game: " + req.body.game);
    return res.status(httpCodes.OK).send("Success");
});

module.exports = router;
