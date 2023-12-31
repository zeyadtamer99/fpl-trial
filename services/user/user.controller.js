const User = require("./user.model");
const { generateCrudMethods } = require("../../generic/crudOperations");
const userCrud = generateCrudMethods(User);
const { raiseRecord404Error } = require("../../generic/middlewares");

exports.getAll = (req, res, next) => {
  userCrud
    .getAll()
    .then((data) => res.send(data))
    .catch((err) => next(err));
};

exports.getById = (req, res, next) => {
  userCrud
    .getById(req.params.id)
    .then((data) => {
      if (data) res.send(data);
      else raiseRecord404Error(req, res);
    })
    .catch((err) => next(err));
};

exports.create = (req, res, next) => {
  userCrud
    .create(req.body)
    .then((data) => res.status(201).json(data))
    .catch((err) => next(err));
};

exports.update = (req, res, next) => {
  userCrud
    .update(req.params.id, req.body)
    .then((data) => {
      if (data) res.send(data);
      else raiseRecord404Error(req, res);
    })
    .catch((err) => next(err));
};

exports.delete = (req, res, next) => {
  userCrud
    .delete(req.params.id)
    .then((data) => {
      if (data) res.send(data);
      else raiseRecord404Error(req, res);
    })
    .catch((err) => next(err));
};
