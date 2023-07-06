const express = require("express");
const router = express.Router();

let transactionArray = require("../models/transactionModel");

router.get("/", (req, res) => {
  res.json(transactionArray);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const match = transactionArray.find((item) => item.id === Number(id));

  if (!match) {
    res.status(404).json({
      status: false,
      message: "Id not found",
    });
  } else {
    res.json(match);
  }
});

router.post("/", (req, res) => {
  const newTransaction = req.body;

  if (Object.keys(newTransaction).length === 0) {
    res.send("Cannot create empy log");
  } else {
    transactionArray.push(newTransaction);
    res.json(transactionArray);
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  let foundIndex = transactionArray.findIndex((item) => item.id === Number(id));

  if (foundIndex === -1) {
    res.status(404).json({
      status: false,
      message: "No transaction with this id found",
    });
  } else {
    transactionArray.splice(foundIndex, 1);
    res.json(transactionArray);
  }
});

router.put("/:id", (req, res) => {
  let id = req.params.id;

  let foundIndex = transactionArray.findIndex((item) => item.id === Number(id));

  if (foundIndex === -1) {
    res
      .status(404)
      .json({ status: false, message: "No transaction with this id found" });
  } else {
    let foundTransaction = transactionArray[foundIndex];

    let newTransactionObj = {
      ...foundTransaction,
      ...req.body,
    };

    transactionArray.splice(foundIndex, 1, newTransactionObj);

    res.json(newTransactionObj);
  }
});

module.exports = router;
