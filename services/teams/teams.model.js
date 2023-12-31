const mongoose = require("mongoose");
const { TEAM_COLLECTION } = require("../../constants/constants");

const PlayerSchema = new mongoose.Schema({
  name: { type: String },
  team: { type: String },
  isBenched: { type: Boolean, default: false },
  isCaptain: { type: Boolean, default: false },
  position: {
    type: String,
    enum: ["goalkeeper", "defender", "midfielder", "attacker"],
    required: true,
  },
  points: { type: Number, default: 0 },
  rating: { type: Number, default: 0 },
});

const Team = mongoose.model(
  "Team",
  {
    name: { type: String },
    email: { type: String },
    captainPlayer: { type: String },
    points: { type: Number },
    players: [PlayerSchema],
    benchPlayers: [PlayerSchema],
    extras: {
      type: String,
      enum: ["tripleCaptain", "benchBoost", "wildCard"],
      default: null,
    },
  },
  TEAM_COLLECTION
);

module.exports = Team;
