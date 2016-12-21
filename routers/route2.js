"use strict";
var express = require("express");
var twilio = require("twilio");
var accountSid = '{{ account_sid }}';
var authToken = '{{ auth_token }}';
var client = new twilio.RestClient(accountSid, authToken);
exports.router2 = express.Router();
exports.router2.get('/twilio', function (req, res, next) {
    var msg = {
        body: 'Hello, babe!',
        to: '+12345678901',
        from: '+12345678901'
    };
    client.messages.create(msg, function (err, message) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(message);
        }
    });
});
