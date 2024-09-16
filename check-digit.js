function checkDigitsInName(checkName) {
  if (typeof checkName !== "string") {
    return "Invalid input";
  }
  const hasDigit = /\d/.test(checkName);
  return hasDigit;
}
const names = "Raj";
const result = checkDigitsInName(names);
console.log(result);