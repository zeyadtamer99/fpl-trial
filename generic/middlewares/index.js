const { ERROR_MESSAGES } = require("../../constants/constants");

const ObjectId = require("mongoose").Types.ObjectId;

const validateDbId = (req, res, next) => {
  if (ObjectId.isValid(req.params.id) == false) {
    res.status(400).json({
      error: ERROR_MESSAGES.INVALID_ID + req.params.id,
    });
  } else next();
};

const raiseRecord404Error = (req, res) => {
  res
    .status(404)
    .json({ error: ERROR_MESSAGES.RECORD_NOT_FOUND + req.params.id });
};

const errorHandler = (error, req, res, next) => {
  res.status(500).json({ error });
};

module.exports = {
  raiseRecord404Error,
  validateDbId,
};
