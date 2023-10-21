const { changeRate } = require("../utils/index.js");

class ChangeRateService {
  constructor(rate) {
    this.rate = rate;
  }

  changeRateAmount(source, target, amount) {
    if (!this.isValidCurrency(source, target)) return null;

    return changeRate(amount, this.rate[source][target]);
  }

  isValidCurrency(source, target) {
    if (this.rate[source] === undefined) return false;
    return !!this.rate[source][target];
  }
}

module.exports = ChangeRateService;
