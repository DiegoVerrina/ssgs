const add = require("../calculator").add;
const subtract = require("../calculator").subtract;

test("Addizione corretta: 2 + 2 = 4", () => {
    ;
    expect(add(2, 2)).toBe(4); // Test che dovrebbe passare
  });
  
  test.skip("Test errato: 3 + 5 = 7", () => {
    expect(add(3, 5)).toBe(7); // Test che non passa (perché il risultato è 8)
  });

    test("Sottrazione corretta: 5 - 3 = 2", () => {
        expect(subtract(5, 3)).toBe(2); // Test che dovrebbe passare
      }
    );
  
