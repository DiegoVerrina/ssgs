const { add, subtract, multiply, divide, power } = require("../calculator");

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

  test("Addizione con numeri negativi: -2 + -3 = -5", () => {
    expect(add(-2, -3)).toBe(-5);
  });
});

describe("Funzione power", () => {
  test("Potenza: 2^3 = 8", () => {
    expect(power(2, 3)).toBe(8);
  });

  test("Potenza con esponente zero: 5^0 = 1", () => {
    expect(power(5, 0)).toBe(1);
  });

  test("Potenza con base zero: 0^5 = 0", () => {
    expect(power(0, 5)).toBe(0);
  });

  test("Potenza con esponente negativo: 2^-2 = 0.25", () => {
    expect(power(2, -2)).toBe(0.25);
  });

  test("Potenza con base negativa: (-2)^3 = -8", () => {
    expect(power(-2, 3)).toBe(-8);
  });
});
