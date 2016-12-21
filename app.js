"use strict";
var express = require("express");
var route1_1 = require("./routers/route1");
var route2_1 = require("./routers/route2");
var app = express();
app.get('/', function (req, res, next) {
    res.end('get');
})
    .use('/to', route1_1.router1)
    .use('/static', express.static(__dirname + '/public'))
    .use('/msg', route2_1.router2);
app.listen(3000, function () {
    console.log('App started on port 3000');
});
