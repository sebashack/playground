"use strict";
var express = require("express");
var handlers_1 = require("./handlers");
exports.router1 = express.Router();
//Router is decoupled from handler.
exports.router1.route('/endpoint1')
    .get(handlers_1.endpoint1Handler);
