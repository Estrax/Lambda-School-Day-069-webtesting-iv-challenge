const request = require('supertest');
const api = require('../../');
const db = require('../database/dbConfig');

afterEach(async () => {
    await db('resources').truncate();
});

describe('----- Server -----', () => {
    describe('ROUTE /', () => {
        describe('GET', () => {
            it('should get a response status code 200', async () => {
                const response = await request(api).get('/resources');
                expect(response.status).toBe(200);
            });

            it('should respond with JSON', async () => {
                const response = await request(api).get('/resources');
                expect(response.type).toBe('application/json');
            });

            it('should get the empty response object', async () => {
                const response = await request(api).get('/resources');
                expect(response.body).toEqual([]);
            });

            it('should get the appropriate response object', async () => {
                await request(api).post('/resources').send({
                    name: 'resource name'
                });
                const response = await request(api).get('/resources');
                expect(response.body).toEqual([{ id: 1, name: 'resource name' }]);

            })
        });

        describe('POST', () => {
            it('should get a response status code 201 on success', async () => {
                const response = await request(api).post('/resources').send({
                    name: 'resource name'
                });
                expect(response.status).toBe(201);
            });

            it('should get a response status code 500 on failure', async () => {
                const response = await request(api).post('/resources').send({
                    name: ''
                });
                expect(response.status).toBe(500);
            });

            it('should respond with JSON', async () => {
                const response = await request(api).post('/resources').send({
                    name: 'resource name'
                });
                expect(response.type).toBe('application/json');
            });

            it('should get the appropriate response', async () => {
                const response = await request(api).post('/resources').send({
                    name: 'resource name'
                });
                expect(response.body).toEqual(1);
            });
        });
    });
    describe('ROUTE /:id', () => {
        describe('GET', () => {
            it('should get a response status code 200 on success', async () => {
                await request(api).post('/resources').send({
                    name: 'resource name'
                });
                const response = await request(api).get('/resources/1');
                expect(response.status).toBe(200);
            });

            it('should get a response status code 500 on failure', async () => {
                const response = await request(api).get('/resources/1000');
                expect(response.status).toBe(500);
            });

            it('should respond with JSON', async () => {
                await request(api).post('/resources').send({
                    name: 'resource name'
                });
                const response = await request(api).get('/resources/1');
                expect(response.type).toBe('application/json');
            });

            it('should get the appropriate response', async () => {
                await request(api).post('/resources').send({
                    name: 'resource name'
                });
                const response = await request(api).get('/resources/1');
                expect(response.status).toBe(200);
                expect(response.body).toEqual({
                    id: 1,
                    name: 'resource name'
                });
            });
        });

        describe('PUT', () => {
            it('should get a response status code 200 on success', async () => {
                await request(api).post('/resources').send({
                    name: 'resource name'
                });
                const response = await request(api).put('/resources/1').send({
                    name: 'resource name 2'
                });
                expect(response.status).toBe(200);
            });

            it('should get a response status code 400 on failure', async () => {
                await request(api).post('/resources').send({
                    name: 'resource name'
                });
                const response = await request(api).put('/resources/1').send({ });
                expect(response.status).toBe(400);
            });

            it('should get a response status code 404 on failure', async () => {
                const response = await request(api).put('/resources/1').send({
                    name: 'resource name 2'
                });
                expect(response.status).toBe(404);
            });

            it('should respond with JSON', async () => {
                await request(api).post('/resources').send({
                    name: 'resource name'
                });
                const response = await request(api).put('/resources/1').send({
                    name: 'resource name 2'
                });
                expect(response.type).toBe('application/json');
            });

            it('should get the appropriate response', async () => {
                await request(api).post('/resources').send({
                    name: 'resource name'
                });
                const response = await request(api).put('/resources/1').send({
                    name: 'resource name 2'
                });
                expect(response.body).toEqual(1);
            });
        });

        describe('DELETE', () => {
            it('should get a response status code 200 on success', async () => {
                await request(api).post('/resources').send({
                    name: 'resource name'
                });
                const response = await request(api).delete('/resources/1');
                expect(response.status).toBe(200);
            });

            it('should get a response status code 404 on failure', async () => {
                const response = await request(api).delete('/resources/1000');
                expect(response.status).toBe(404);
            });

            it('should respond with JSON', async () => {
                await request(api).post('/resources').send({
                    name: 'resource name'
                });
                const response = await request(api).delete('/resources/1');
                expect(response.type).toBe('application/json');
            });

            it('should get the appropriate response', async () => {
                await request(api).post('/resources').send({
                    name: 'resource name'
                });
                const response = await request(api).delete('/resources/1');
                expect(response.body).toEqual({
                    success: true
                });
            });
        });
    });
});