function checkIsNumber(first, second) {
  if (typeof first !== "number") {
    throw new TypeError(`${first} is not a number`);
  }

  if (typeof second !== "number") {
    throw new TypeError(`${second} is not a number`);
  }

  return true;
}

function add(first, second) {
  checkIsNumber(first, second);
  return first + second;
}

function subtract(first, second) {
  checkIsNumber(first, second);
  return first - second;
}

function divide(first, second) {
  checkIsNumber(first, second);
  if (second === 0) {
    throw new Error("Can't divide per 0");
  }
  return first / second;
}

function multiply(first, second) {
  checkIsNumber(first, second);
  return first * second;
}

function mod(first, second) {
  checkIsNumber(first, second);
  return first % second;
}

module.exports = {
  checkIsNumber,
  add,
  subtract,
  divide,
  multiply,
  mod,
};
