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

module.exports = router;