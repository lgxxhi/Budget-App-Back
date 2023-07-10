const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

const transactionController = require("./controllers/transactionController");
const indexController = require("./controllers/indexController");

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/", indexController);
app.use("/transactions", transactionController);

app.use("*", (req, res) => {
  res.status(404).send("Sorry, no page found!");
});

module.exports = app;
