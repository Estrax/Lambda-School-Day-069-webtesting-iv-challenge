const resources = require('../database/helpers/resourceHelpers');
const request = require('supertest');
const db = require('../database/dbConfig');

afterEach(async () => {
    await db('resources').truncate();
});

describe('----- RESOURCE MODEL -----', () => {
    describe('GET', async () => {
        it('should return all resources on success', async () => {
            const response = await resources.get();
            expect(response).toEqual([]);
        });
    });

    describe('INSERT', async () => {
        it('should insert a new resource on success', async () => {
            const response = await resources.insert({ name: 'resource name' });
            expect(response).toEqual({ id: 1 });
        });
    });

    describe('GET WITH ID', async () => {
        it('should get a resource with ID on success', async () => {
            await resources.insert({ name: 'resource name' });
            const response = await resources.getById(1);
            expect(response).toEqual({ id: 1, name: 'resource name' });
        });
    });

    describe('UPDATE', async () => {
        it('should update a resource with ID on success', async () => {
            await resources.insert({ name: 'resource name' });
            const response = await resources.update(1, { name: 'resource name 2' });
            expect(response).toEqual({ id: 1, name: 'resource name 2' });
        });
    });

    describe('REMOVE', async () => {
        it('should remove a resource with ID on success', async () => {
            await resources.insert({ name: 'resource name' });
            const response = await resources.remove(1);
            expect(response).toEqual(1);
        });
    });
});