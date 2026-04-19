const { validatorDiscussionInput } = require('../Validator/DiscussionValidator');

function discussionValidator(req, res, next) {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(422).json({ message: "Request body missing" });
  }

  const { error } = validatorDiscussionInput(req.body);

  if (error) {
    return res.status(422).json({
      message: error.details[0].message
    });
  }

  next();
}

module.exports = { discussionValidator };