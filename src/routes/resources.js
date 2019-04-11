const router = require('express').Router();
const db = require('../database/helpers/resourceHelpers');


router.route('/')
    .get(async (req, res) => {
        await db('resources')
                .get()
                .then(resources => res.status(200).json(resources))
                .catch(err => res.status(500).json({ error: "Resources could not be retrieved."}));
    })
    .post(async (req, res) => {
        if(!req.body.name) return res.status(400).json({ error: "Please provide the name for the resource." });
        await db('resources')
                .insert(req.body)
                .then(statusCode => res.status(201).json(statusCode))
                .catch(err => res.status(500).json({ error: "There was an error while saving the resource to the database."}));
    });

router.route('/:id')
    .get(async (req, res) => {
        await db('resources')
                .getById(req.params.id)
                .then(resource => res.status(200).json(resource))
                .catch(err => res.status(500).json({ error: "Resource could not be retrieved."}));
    })
    .put(async (req, res) => {
        await db('resources').update(req.params.id, req.body)
            .then(
                resource => resource.length === 0
                ? res.status(404).json({ message: "The resource with the specified ID does not exist." })
                : res.status(200).json(resource)
            )
            .catch(err => res.status(500).json({ error: "Resource could not be updated."}));
    })
    .delete(async (req, res) => {
        await db('resources').remove(req.params.id)
            .then(
                resource => resource.length === 0
                ? res.status(404).json({ message: "The resource with the specified ID does not exist." })
                : res.status(200).json({ success: true}))
            .catch(err => res.status(500).json({ error: "Resource could not be deleted." }));
    });


module.exports = router;