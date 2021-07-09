const express = require("express");
const Action = require("../../data/helpers/actionModel");
const { validateActionId, validateAction } = require("./middlewares");
const { validateProjId } = require("../projects/middlewares");

const router = express.Router({ mergeParams: true });

// Fetch all actions for a specific project
router.get("/", validateProjId, (req, res) => {
  res.status(200).json(req.project.actions);
});

// Fetch an action for a specific project
router.get("/:actionId", validateProjId, validateActionId, (req, res) => {
  res.status(200).json(req.action);
});

// Create new action for a project
router.post("/", validateProjId, validateAction, (req, res) => {
  Action.insert(req.body)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((err) =>
      res.status(500).json({ message: "Error creating new action" })
    );
});

// Update an action
router.put(
  "/:actionId",
  [validateProjId, validateActionId, validateAction],
  (req, res) => {
    Action.update(req.params.actionId, req.body)
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) =>
        res.status(500).json({ message: "Error updating resource" })
      );
  }
);

// Remove an action
router.delete("/:actionId", validateProjId, validateActionId, (req, res) => {
  Action.remove(req.params.actionId)
    .then((data) => {
      res.status(200).json({ message: "action removed", data: req.action });
    })
    .catch((err) =>
      res.status(500).json({ message: "Error removing resource" })
    );
});

module.exports = router;
