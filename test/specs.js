"use strict";
var request = require("supertest");
var home_route_1 = require("../routers/home_route");
describe('ENDPOINT1', function () {
    describe('response', function () {
        it('should return a json object', function () {
            request(home_route_1.homeRouter).get('/').expect(200, 'Home babe!');
        });
    });
});
