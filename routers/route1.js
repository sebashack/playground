"use strict";
var express = require("express");
exports.router1 = express.Router();
exports.router1.route('/endpoint1')
    .get(function (req, res, next) {
    res.end(req.query.color);
});
