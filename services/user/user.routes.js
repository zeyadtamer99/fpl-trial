const express = require("express");
const router = express.Router();

const UserController = require("./user.controller");
const {
  validateDbId,
  raiseRecord404Error,
} = require("../../generic/middlewares");

router.get("/", UserController.getAll);
router.get("/:id", validateDbId, UserController.getById);
router.post("/", UserController.create);
router.put("/:id", validateDbId, UserController.update);
router.delete("/:id", validateDbId, UserController.delete);

module.exports = router;
