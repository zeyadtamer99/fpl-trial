const express = require("express");
const bodyParser = require("body-parser");

const connectDb = require("./config/db.js");
const userRoute = require("./services/user/user.routes.js");
const teamRoute = require("./services/teams/teams.routes.js");
const { errorHandler } = require("./generic/middlewares/index.js");
const app = express();

app.use(bodyParser.json());
app.use("/users", userRoute);
app.use("/teams", teamRoute);
//app.use(errorHandler);

connectDb()
  .then(() => {
    console.log("db connection succeeded");
    app.listen(3000, () => console.log("its server"));
  })
  .catch((err) => console.log(err));
