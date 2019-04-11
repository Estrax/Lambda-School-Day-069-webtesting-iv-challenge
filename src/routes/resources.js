const router = require('express').Router();
const knex = require('knex');
const dbConfig = require('../../knexfile');
const db = knex(dbConfig.development);

router.route('/')
    .get(async (req, res) => {

    })
    .post(async (req, res) => {
        
    });

router.route('/:id')
    .get(async (req, res) => {

    })
    .put(async (req, res) => {
        
    })
    .delete(async (req, res) => {
        
    });


module.exports = router;