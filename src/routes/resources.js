const router = require('express').Router();
const knex = require('knex');
const dbConfig = require('../../knexfile');
const db = knex(dbConfig.development);

router.route('/')
    .get(async (req, res) => {
        await db
                .get()
                .then(resources => res.status(200).json(resources))
                .catch(err => res.status(500).json({ error: "Resources could not be retrieved."}));
    })
    .post(async (req, res) => {
        if(!req.body.name) return res.status(400).json({ error: "Please provide the name for the resource." });
        await db
                .insert(req.body)
                .then(statusCode => res.status(201).json(statusCode))
                .catch(err => res.status(500).json({ error: "There was an error while saving the resource to the database."}));
    });

router.route('/:id')
    .get(async (req, res) => {
        await db
                .getById(req.params.id)
                .then(resource => res.status(200).json(resource))
                .catch(err => res.status(500).json({ error: "Resource could not be retrieved."}));
    })
    .put(async (req, res) => {
        
    })
    .delete(async (req, res) => {
        
    });


module.exports = router;