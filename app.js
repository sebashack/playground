"use strict";
var express = require("express");
var path = require("path");
var route1_1 = require("./routers/route1");
var route2_1 = require("./routers/route2");
var home_route_1 = require("./routers/home_route");
var app = express();
app.set('view engine', 'pug');
app.set('views', path.resolve(__dirname, 'views'));
app.set('port', process.env.PORT || 3000);
app.use(home_route_1.homeRouter)
    .use(home_route_1.htmlHomeRouter)
    .use('/to', route1_1.router1)
    .use('/static', express.static(__dirname + '/public'))
    .use('/msg', route2_1.router2);
app.listen(3000, function () {
    console.log('App started on port 3000');
});
