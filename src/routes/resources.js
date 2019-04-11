const router = require('express').Router();
const db = require('../database/helpers/resourceHelpers');


router.route('/')
    .get(async (req, res) => {
        await db
                .get()
                .then(resources => res.status(200).json(resources))
                .catch(err => res.status(500).json({ error: "Resources could not be retrieved."}));
    })
    .post(async (req, res) => {
        if(!req.body.name) return res.status(500).json({ error: "There was an error while saving the resource to the database."});
        await db
                .insert(req.body)
                .then(statusCode => res.status(201).json(statusCode))
                .catch(err => res.status(500).json({ error: "There was an error while saving the resource to the database."}));
    });

router.route('/:id')
    .get(async (req, res) => {
        await db
                .getById(req.params.id)
                .then(
                    resource => resource.length === 0
                    ? res.status(404).json({ message: "The resource with the specified ID does not exist." })
                    : res.status(200).json(resource)
                )
                .catch(err => res.status(500).json({ error: "Resource could not be retrieved."}));
    })
    .put(async (req, res) => {
        if(!req.body.name || req.body.name.length === 0) return res.status(500).json({ error: "Resource could not be updated."});
        await db.update(req.params.id, req.body)
            .then(
                resource => resource.length === 0
                ? res.status(404).json({ message: "The resource with the specified ID does not exist." })
                : res.status(200).json(resource)
            )
            .catch(err => res.status(500).json({ error: "Resource could not be updated."}));
    })
    .delete(async (req, res) => {
        await db.remove(req.params.id)
            .then(resource => (resource.length === 0 || resource === 0)
                ? res.status(404).json({ message: "The resource with the specified ID does not exist." })
                : res.status(200).json({ success: true })
            )
            .catch(err => res.status(500).json({ error: "Resource could not be deleted." }));
    });


module.exports = router;