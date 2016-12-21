"use strict";
var express = require("express");
var handlers_1 = require("./handlers");
exports.router2 = express.Router();
exports.router2.get('/twilio', handlers_1.twilioHandler);
