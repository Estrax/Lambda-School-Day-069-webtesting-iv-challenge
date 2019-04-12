require('dotenv').config();
const knex = require('knex');
const dbConfig = require('../../knexfile');
const db = knex(dbConfig[process.env.ENV]);

module.exports = db;