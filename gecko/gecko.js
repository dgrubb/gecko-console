/**
 * Gecko
 *
 * Presents a web interface which acts as a front-end for 
 * installed game emulators which is context sensitive to which
 * game controllers are connected.
 *
 * Usage:
 *
 *  $node gecko.js
 */

// NPM dependencies
var async = require("async");
var fs = require("fs");
var http = require("http");
var child_process = require("child_process");
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var serveStatic = require("serve-static");
var _ = require("underscore");

// Local modules
var log = require(path.resolve(__dirname, "include", "log"));
var config = require(path.resolve(__dirname, "include", "config"));
var usb = require(path.resolve(__dirname, "include", "usb"));
var personality = require(path.resolve(__dirname, "include", "personality"));

// Definitions
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Validates whether a string contains a valid endpoint file. To be valid
 * a filename must be a non-hidden .js file.
 *
 * @param {string} Filename to test
 * @returns {string} Name of endpoint, null on failure
 */
function validateEndpoint(filename) {
    var fileMatch = new RegExp(/^w+\.js/g);
    if (fileMatch.test(filename)) {
        return filename.substr(0, filename.lastIndexOf("."));
    }
    return null;
}

function initInterface(callback) {
    // Each top-level endpoint shall be represented by a .js file under api, e.g.,:
    //
    // http://localhost/api/usb - ./api/usb.js
    // http://localhost/api/foo - ./api/foo.js
    // etc
    //
    // We shall dynamically populate our api calls by scanning the api directory
    // for .js files, require() them to retrieve their module contents and attach
    // each one in turn as a user-callable endpoint. In this way we can avoid
    // having to manually track each new addition and can extend our api calls by
    // simply adding a new module in the correct place.
    fs.readdir(__dirname + "/api", function(err, files) {
        files.forEach(function(file) {
            // Ensure each item is a valid .js file. We wish to avoid including .swp
            // files, for instance.
            endpoint = validateEndpoint(file);
            if (endpoint) {
                log.debug("Adding API endpoint: " + endpoint);
                app.use(
                    "/api/" + endpoint,
                    require(path.resolve(__dirname, "api", endpoint))
                );
            }
        });
        callback(null);
    });
}

/*******************************************************************************
 * Start script execution
 ******************************************************************************/

log.level = config.logLevel;
log.info("Initialising: " + config.appInfo.name + ", v" + config.appInfo.version);

// Deliver the UI as a locally served HTML/JS application
app.use(express.static(__dirname + "/static"));

async.series([
    personality.loadPersonalityList,
    personality.derivePersonality,
    initInterface
], function(err, result) {
    if (err) {
        log.error("Failed to initialise Gecko");
        process.exit(-1);
    }
    app.listen(config.httpPort, function() {
        log.info("HTTP interface initialised");
    });
});

