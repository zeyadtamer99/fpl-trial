// teams.controller.js
const Team = require("./teams.model");
const { generateCrudMethods } = require("../../generic/crudOperations");
const teamCrud = generateCrudMethods(Team);
const { raiseRecord404Error } = require("../../generic/middlewares");

exports.getAll = (req, res, next) => {
  teamCrud
    .getAll()
    .then((data) => res.send(data))
    .catch((err) => next(err));
};

exports.getById = (req, res, next) => {
  teamCrud
    .getById(req.params.id)
    .then((data) => {
      if (data) res.send(data);
      else raiseRecord404Error(req, res);
    })
    .catch((err) => next(err));
};

exports.create = (req, res, next) => {
  teamCrud
    .create(req.body)
    .then((data) => res.status(201).json(data))
    .catch((err) => next(err));
};

exports.update = (req, res, next) => {
  teamCrud
    .update(req.params.id, req.body)
    .then((data) => {
      if (data) res.send(data);
      else raiseRecord404Error(req, res);
    })
    .catch((err) => next(err));
};

exports.delete = (req, res, next) => {
  teamCrud
    .delete(req.params.id)
    .then((data) => {
      if (data) res.send(data);
      else raiseRecord404Error(req, res);
    })
    .catch((err) => next(err));
};

exports.getPlayers = async (req, res, next) => {
  try {
    const team = await Team.findById(req.params.id);
    res.send(team.players);
  } catch (err) {
    next(err);
  }
};

exports.getBenchPlayers = async (req, res, next) => {
  try {
    const team = await Team.findById(req.params.id);
    res.send(team.benchPlayers);
  } catch (err) {
    next(err);
  }
};

exports.getExtras = async (req, res, next) => {
  try {
    const team = await Team.findById(req.params.id);
    res.send(team.extras);
  } catch (err) {
    next(err);
  }
};

exports.addPlayer = async (req, res, next) => {
  try {
    const team = await Team.findById(req.params.id);
    team.players.push(req.body);
    await team.save();
    res.status(201).json(team);
  } catch (err) {
    next(err);
  }
};

exports.addBenchPlayer = async (req, res, next) => {
  try {
    const team = await Team.findById(req.params.id);
    team.benchPlayers.push(req.body);
    await team.save();
    res.status(201).json(team);
  } catch (err) {
    next(err);
  }
};

exports.addExtra = async (req, res, next) => {
  try {
    const team = await Team.findById(req.params.id);
    team.extras = req.body.extras;
    await team.save();
    res.status(201).json(team);
  } catch (err) {
    next(err);
  }
};

exports.updateCaptainPlayer = async (req, res, next) => {
  try {
    const team = await Team.findById(req.params.id);
    team.captainPlayer = req.body.captainPlayer;
    await team.save();
    res.send(team);
  } catch (err) {
    next(err);
  }
};

exports.updatePoints = async (req, res, next) => {
  try {
    const team = await Team.findById(req.params.id);
    team.points = req.body.points;
    await team.save();
    res.send(team);
  } catch (err) {
    next(err);
  }
};

exports.updateExtras = async (req, res, next) => {
  try {
    const team = await Team.findById(req.params.id);
    team.extras = req.body.extras;
    await team.save();
    res.send(team);
  } catch (err) {
    next(err);
  }
};

exports.removePlayer = async (req, res, next) => {
  try {
    const team = await Team.findById(req.params.id);
    team.players.id(req.params.playerId).remove();
    await team.save();
    res.send(team);
  } catch (err) {
    next(err);
  }
};

exports.removeBenchPlayer = async (req, res, next) => {
  try {
    const team = await Team.findById(req.params.id);
    team.benchPlayers.id(req.params.playerId).remove();
    await team.save();
    res.send(team);
  } catch (err) {
    next(err);
  }
};

exports.removeExtra = async (req, res, next) => {
  try {
    const team = await Team.findById(req.params.id);
    team.extras = null;
    await team.save();
    res.send(team);
  } catch (err) {
    next(err);
  }
};
