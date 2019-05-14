/*
 * File: log.js
 * Author: dgrubb
 * Date: 05/13/2019
 *
 * Provides an interface for consistent logging throughout the application.
 */

var rightpad = require("right-pad");

const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, printf } = format;

const geckoFormat = printf(({ level, message, label, timestamp }) => {
    level = rightpad(level, 8, " ").toUpperCase();
    return `[ ${timestamp} | ${level} ]: ${message}`;
});

module.exports = createLogger({
    format: combine(
        label({ label: 'Gecko' }),
        timestamp(),
        geckoFormat
    ),
    transports: [new transports.Console()]
});

