const ChangeRateService = require("../service/ChangeRateService");
const rate = require("../rate.json");
describe("ChangeRateService", () => {
  describe("ChangeRate", () => {
    const changeRateService = new ChangeRateService(rate.currencies);
    it("should correctly calculate the amount when the amount is greater than 1", () => {
      const source = "USD";
      const target = "JPY";
      const amount = "$1,525";

      expect(changeRateService.changeRateAmount(source, target, amount)).toBe(
        "$170,496.53"
      );
    });

    it("should correctly calculate the amount when the amount is a fraction", () => {
      const source = "USD";
      const target = "TWD";
      const amount = "$0.12";

      expect(changeRateService.changeRateAmount(source, target, amount)).toBe(
        "$3.65"
      );
    });

    it("should correctly calculate the amount when the amount equals 0", () => {
      const source = "JPY";
      const target = "USD";
      const amount = "$0";

      expect(changeRateService.changeRateAmount(source, target, amount)).toBe(
        "$0.00"
      );
    });
  });
});
