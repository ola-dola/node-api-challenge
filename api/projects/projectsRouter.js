const express = require("express");
const projDb = require("../../data/helpers/projectModel");
const { validateProjId, validateProject } = require("./middlewares");

const router = express.Router();

// Fetch all projects
router.get("/", (req, res) => {
  projDb
    .get()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(500).json({ message: "Error fetching resource" })
    );
});

// Create project
router.post("/", validateProject, (req, res) => {
  projDb
    .insert(req.body)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) =>
      res.status(500).json({ message: "Error creating new project" })
    );
});

// Update project
router.put("/:id", validateProjId, validateProject, (req, res) => {
  projDb
    .update(req.params.id, req.body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(500).json({ message: "Error updating resource" })
    );
});

// Remove project
router.delete("/:id", validateProjId, (req, res) => {
  projDb
    .remove(req.params.id)
    .then((data) => {
      res.status(200).json({ message: "project removed", data: req.project });
    })
    .catch((err) =>
      res.status(500).json({ message: "Error removing resource" })
    );
});

module.exports = router;
