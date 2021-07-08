const projDb = require("../../data/helpers/projectModel");

function validateProject(req, res, next) {
  const { name, description } = req.body;

  if (!Object.keys(req.body).length) {
    res.status(400).json({ message: "missing post data" });
  } else if (!name || !description) {
    res.status(400).json({ message: "missing required details" });
  } else {
    next();
  }
}

function validateProjId(req, res, next) {
  const { id } = req.params;

  projDb
    .get(id)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "Invalid project id" });
      }

      req.project = data;
      next();
    })
    .catch((err) => {
      return res.status(500).json({ message: "Unexpected server error" });
    });
}

module.exports = {
  validateProject,
  validateProjId,
};
