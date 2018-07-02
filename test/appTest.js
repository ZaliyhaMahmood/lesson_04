const expect = require('expect');
const request = require('supertest');
const assert = require('chai').assert;

var app = require('../app').app;
describe('SERVER TESTING',() => {
  
  describe('GET /', () => {
    it('should return an object', (done) => {
      request(app)
        .get('/')
        .expect(200)
        .expect({
        title: 'Simple Server',
        stack: 'Mocha, expect, supertest'
      })    
        .end(done); 
    });

    it('should include "stack"', (done) => {
      request(app)
        .get('/')   
        .expect((res) => {
          expect({
            stack: 'Mocha, expect, supertest'
          });
        })    
        .end(done); 
    });
  }); 

  describe('GET /users', () => {
    it('should return an array of objects', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect([{
        user: 'admin',
        status: 'administrator'
      }, {
        user: 'guest',
        status: 'guest'
      }, {
        user: 'super',
        status: 'superuser'
      }])
        .end(done);
    });

    it('should include user "admin"', (done) => {
      request(app)
        .get('/users')
        .expect((res) => {
          expect({
            user: 'admin',
            status: 'administrator'
          });
        })
        .end(done);
    });
  });
  setTimeout(()=>{server.close()}, 1000)
});

