"use strict";
var twilio = require("twilio");
// Twilio's client and credentials
var accountSid = '{{ account_sid }}';
var authToken = '{{ auth_token }}';
var client = new twilio.RestClient(accountSid, authToken);
//Handler fo home page
exports.homeHandler = function (req, res, next) {
    res.send('Home Babe');
};
// Nice practice: always separate your handlers from the express dependencies.
exports.endpoint1Handler = function (req, res, next) {
    res.json({
        color: req.query.color,
        secret: Math.random()
    });
};
// Decoupling Handlers from router
exports.twilioHandler = function (req, res, next) {
    var twCall = {
        body: 'Hello, babe!',
        to: '+12345678901',
        from: '+12345678901'
    };
    client.messages.create(twCall, function (err, message) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(message);
        }
    });
};
