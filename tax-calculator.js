function incomeTax(income, expense) {
  const taxRate = 0.2;
  if (typeof income !== "number" || income <0) {
   return "Error: Income must be a positive number";
  } 
  else if (typeof expense !== "number" || expense <0) {
    return "Error: Expense must be a number";
  }
  const tax = (income - expense) * taxRate;
  return tax;
}

const income = 5000;
const expense = 3000;
const tax = incomeTax(income, expense);
console.log("income tax :", tax);