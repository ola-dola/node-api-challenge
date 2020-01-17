const express = require('express');

const Projects = require('./projectModel');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.get()
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(500).json({message: "Unable to retrieve."})
    })
})

router.post('/', (req, res) => {
    const body = req.body;
    Projects.insert(body)
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(500).json({message: "Unable to add new project."});
    })
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;

    Projects.update(id, body)
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(500).json({message: "Unable to make changes."});
    })
})

module.exports = router;