const request = require("supertest");

const app = require("../app");

describe("GET /exchangeRage", () => {
  test("should return the correct amount", async () => {
    const res = await request(app)
      .get("/exchangeRate")
      .query({ source: "USD", target: "JPY", amount: "$1,525" });

    expect(res.statusCode).toBe(200);
    expect(res.body.amount).toBe("$170,496.53");
  });

  test("should return the 400 when the parameers are missing", async () => {
    const res = await request(app)
      .get("/exchangeRate")
      .query({ source: "USD", target: "JPY" });

    expect(res.statusCode).toBe(400);
  });
  test("should return the 400 when the parameters are invalid", async () => {
    const res = await request(app)
      .get("/exchangeRate")
      .query({ source: "USD", target: "RMB", amount: "$1,525" });

    expect(res.statusCode).toBe(400);
  });
});
