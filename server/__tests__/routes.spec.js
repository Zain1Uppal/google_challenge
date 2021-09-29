const { test } = require('@jest/globals');
const request = require('supertest');
const app = require('../server.js');

describe('api routes', () => {
    let api

    beforeAll(() => {
        api = app.listen(5000, () => {
            console.log("testing")
        })
    })
    afterAll((done) => {
        api.close(done)
    })

    test('GET / returns results array', (done) => {
        request(api)
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })
    test('GET /random', (done) => {
        request(api)
            .get('/random')
            .expect(404, done)
    })


})