import { expect } from 'chai';
import * as request from 'supertest';
import { homeRouter } from '../routers/home_route';


describe('ENDPOINT1', function() {
  describe('response', function() {
    it('should return a json object', function() {
      request(homeRouter).get('/').expect(200, 'Home babe!');
    });
  });
});




