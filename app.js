const express = require("express");
const app = express();
const ChangeRateService = require("./service/ChangeRateService");
const rate = require("./rate.json");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const changeRateService = new ChangeRateService(rate.currencies);

app.get("/exchangeRate", (req, res) => {
  try {
    const { source, target, amount } = req.query;

    if (!source || !target || !amount) {
      return res.status(400).json({ message: "Invalid input data" });
    }

    const changedAmount = changeRateService.changeRateAmount(
      source,
      target,
      amount
    );

    if (changedAmount === null) {
      res.status(400).json({ msg: "Please reference valid currencies" });
    }

    res.status(200).json({ msg: "Success", amount: changedAmount });
  } catch (error) {
    res.status(500).json({ message: "Error occurs" });
  }
});

module.exports = app;
