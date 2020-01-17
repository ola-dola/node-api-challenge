const express = require("express");

const Actions = require("./actionModel");
// const ProjectActions = require("./projectModel");

const router = express.Router();

//get specific actions
router.get("/:id", (req, res) => {
  const id = req.params.id;

  Actions.get(id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json("Unable to retrieve");
    });
});

router.post("/:id", (req, res) => {
  const id = req.params.id;

  Actions.insert(id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json("Unable to add new actions");
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;

  Actions.update(id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json("Unable to make changes");
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  Actions.remove(id)
    .then(data => {
      if (data === 1) {
        res.status(200).json(`Action with id ${id} uccessfully deleted`);
      }
    })
    .catch(err => {
      res.status(500).json("Unable to delete");
    });
});

module.exports = router;
