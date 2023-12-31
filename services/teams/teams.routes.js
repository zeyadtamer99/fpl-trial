// teams.routes.js
const express = require("express");
const router = express.Router();

const TeamsController = require("./teams.controller");
const {
  validateDbId,
  raiseRecord404Error,
} = require("../../generic/middlewares");

router.get("/", TeamsController.getAll);
router.get("/:id", validateDbId, TeamsController.getById);
router.post("/", TeamsController.create);
router.put("/:id", validateDbId, TeamsController.update);
router.delete("/:id", validateDbId, TeamsController.delete);

router.get("/:id/players", validateDbId, TeamsController.getPlayers);
router.get("/:id/benchPlayers", validateDbId, TeamsController.getBenchPlayers);
router.get("/:id/extras", validateDbId, TeamsController.getExtras);

router.post("/:id/players", validateDbId, TeamsController.addPlayer);
router.post("/:id/benchPlayers", validateDbId, TeamsController.addBenchPlayer);
router.post("/:id/extras", validateDbId, TeamsController.addExtra);

router.put(
  "/:id/captainPlayer",
  validateDbId,
  TeamsController.updateCaptainPlayer
);
router.put("/:id/points", validateDbId, TeamsController.updatePoints);
router.put("/:id/extras", validateDbId, TeamsController.updateExtras);

router.delete(
  "/:id/players/:playerId",
  validateDbId,
  TeamsController.removePlayer
);
router.delete(
  "/:id/benchPlayers/:playerId",
  validateDbId,
  TeamsController.removeBenchPlayer
);
router.delete("/:id/extras", validateDbId, TeamsController.removeExtra);

module.exports = router;
