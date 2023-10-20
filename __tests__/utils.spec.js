const { formatDollars, getNumber, changeRate } = require("../utils/index.js");

describe("format dollars", () => {
  test("if the dollar is 0, it should return 0.00", () => {
    const zeroDollar = 0;
    const fixedZeroDollar = zeroDollar.toFixed(2);
    expect(formatDollars(fixedZeroDollar)).toBe("$0.00");
  });

  test("if the dollar has 2 digits of fraction, it should return with $ and fractions", () => {
    const dollars = 12.34;
    expect(formatDollars(dollars)).toBe("$12.34");
  });

  test("it should show the comma per thousand positions", () => {
    const dollars = 123456789.12;
    expect(formatDollars(dollars)).toBe("$123,456,789.12");
  });
});

describe("get number", () => {
  test("it should return number, number with comma", () => {
    const amount = "$1,234.00";
    expect(getNumber(amount)).toBe(1234.0);
  });
  test("it should return number, number without comma", () => {
    const amount = "$123.00";
    expect(getNumber(amount)).toBe(123.0);
  });
});

describe("changeRate", () => {
  test("it should return amount times rate with 2 digit of fractions and dollar sign", () => {
    const amount = "$1,525";
    const rate = 111.801;
    expect(changeRate(amount, rate)).toBe("$170,496.53");
  });
});
