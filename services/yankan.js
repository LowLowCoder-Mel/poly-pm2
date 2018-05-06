'use strict';

const http_api = require('../utils/api');


/**
 * Implements the ActiveDevice RPC method.
 */
exports.ActiveDevice = function(call, callback) {
    http_api.activeDevice(call.request)
        .then((res) => {
            callback(null, res);
        });
}

/**
 * Implements the Add RemoteTask RPC method.
 */
exports.ReActiveDevice = function(call, callback) {
    http_api.reActiveDevice(call.request)
    .then((res) => {
        callback(null, res);
    });
}

/**
 * Implements the Device Online RPC method.
 */
exports.GetOnline = function(call, callback) {
    http_api.getOnline(call.request)
        .then((res) => {
            callback(null, res);
        });
}

/**
 * Implements the Add RemoteTask RPC method.
 */
exports.AddRemoteTask = function(call, callback) {
    http_api.addRemoteTask(call.request)
        .then((res) => {
            callback(null, res);
        });
}