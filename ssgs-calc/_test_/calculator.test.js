const { add, subtract, multiply, divide } = require("../calculator");

describe("Funzioni matematiche di base", () => {
  test("Addizione: 2 + 3 = 5", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("Sottrazione: 5 - 3 = 2", () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test("Moltiplicazione: 4 * 3 = 12", () => {
    expect(multiply(4, 3)).toBe(12);
  });

  test("Divisione: 10 / 2 = 5", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("Divisione per zero lancia un errore", () => {
    expect(() => divide(10, 0)).toThrow("Errore: Divisione per zero non consentita.");
  });
});
