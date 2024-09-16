function calculateFinalScore(obj) {
  if (typeof obj !== "object" || obj === null) {
    return "Invalid Input";
  } else if (
    typeof obj.name === "string" &&
    typeof obj.testScore === "number" &&
    obj.testScore <= 50 &&
    typeof obj.schoolGrade === "number" &&
    obj.schoolGrade <= 30 &&
    typeof obj.isFFamily === "boolean"
  ) {
    let result = obj.testScore + obj.schoolGrade;

    if (obj.isFFamily) {
      result += 20;
    }
    return result >= 80;
  } else {
    return "Invalid Input";
  }
}

const final_result = {
  name: "Rajib",
  testScore: 40,
  schoolGrade: 25,
  isFFamily: true,
};
const output = calculateFinalScore(final_result);
console.log(output);
