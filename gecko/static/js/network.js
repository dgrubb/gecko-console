/*
 * File: network.js
 * Author: dgrubb
 * Date: 05/13/2019
 *
 * Provides fundamental network operations.
 */

var Network = (function() {
    'use strict';

    function request(type, url, data, callback) {
        var jqXHR = $.ajax({
            url: url,
            data: data,
            method: type,
            processData: true,
            complete: callback,
            timeout: 3000
        });
    }

    function get(uri, data, callback) {
        request("GET", uri, data, callback);
    }

    function post(uri, data, callback) {
        request("POST", uri, data, callback);
    }

    var api = {
        get: get,
        post: post
    };

    return api;
}());
