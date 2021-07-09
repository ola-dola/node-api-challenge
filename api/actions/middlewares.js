const Action = require("../../data/helpers/actionModel");

function validateAction(req, res, next) {
  const { notes, description, project_id, completed } = req.body;

  if (!Object.keys(req.body).length) {
    res.status(400).json({ message: "missing action data" });
  } else if ([notes, description, project_id].includes(undefined)) {
    res.status(400).json({ message: "missing required details" });
  } else if (description.length > 128) {
    res.status(400).json({ message: "description character limit exceeded" });
  } else if (completed && typeof completed !== "boolean") {
    res.status(400).json({ message: "'completed' property must be a boolean" });
  } else {
    next();
  }
}

function validateActionId(req, res, next) {
  const { actionId } = req.params;

  const actionInView = req.project.actions.find(
    (action) => action.id == actionId
  );

  if (!actionInView) {
    return res
      .status(404)
      .json({ message: "specified action does not exist for this project" });
  }

  req.action = actionInView;
  next();
}

module.exports = {
  validateAction,
  validateActionId,
};
