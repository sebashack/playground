"use strict";
var express = require("express");
var handlers_1 = require("./handlers");
exports.homeRouter = express.Router();
exports.htmlHomeRouter = express.Router();
//Home Router
exports.homeRouter.get('/', handlers_1.homeHandler);
//Rendering Pug
exports.htmlHomeRouter.get('/home', function (req, res, next) {
    res.render('index.pug');
});
