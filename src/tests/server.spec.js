const request = require('supertest');
const api = require('../../');
const db = require('../database/dbConfig');

describe('----- Server -----', () => {
    describe('ROUTE /', () => {
        describe('GET', () => {
            it('should get a response status code 200', async () => {
                const response = await request(api).get('/resources');
                expect(response.status).toBe(200);
            });
        });

        describe('POST', () => {

        });
    });
    describe('ROUTE /:id', () => {
        describe('GET', () => {

        });

        describe('PUT', () => {

        });

        describe('DELETE', () => {

        });
    });
});