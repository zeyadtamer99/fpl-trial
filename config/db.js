const mongoose = require("mongoose");

const dbUri =
  "mongodb+srv://admin:admin123@cluster0.etarrol.mongodb.net/fpl_db?retryWrites=true&w=majority";

module.exports = () => {
  return mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
