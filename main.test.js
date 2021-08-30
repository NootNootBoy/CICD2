const {
  checkIsNumber,
  add,
  subtract,
  divide,
  multiply,
  mod,
} = require("./main");

describe("testing main.js", () => {
  it("Check if first and second is number", () => {
    expect(checkIsNumber(5, 3)).toBe(true);
    expect(() => checkIsNumber("abcd", true)).toThrow(TypeError);
  });

  it("should add 1 + 2 to equal 3", () => {
    expect(add(1, 2)).toBe(3);
  });

  it("should sub 2 - 1 to equal 1", () => {
    expect(subtract(2, 1)).toBe(1);
  });

  it("should divide 4 / 2 to equal 2", () => {
    expect(divide(4, 2)).toBe(2);
  });

  it("should not divide per 0", () => {
    expect(() => divide(5, 0)).toThrow("Can't divide per 0");
  });

  it("should multiply 4 * 2 to equal 8", () => {
    expect(multiply(4, 2)).toBe(8);
  });

  it("should mod 6 % 2 to equal 0", () => {
    expect(mod(6, 2)).toBe(0);
  });
});
