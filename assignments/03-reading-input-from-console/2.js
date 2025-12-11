const readline = require("readline-sync");

const miles = +readline.question("Enter miles: ");
const MILES_TO_KM = 1.6093433333333333;
const kilometers = miles * MILES_TO_KM

console.log("\n" + miles + " miles is equal to " + kilometers + " kilometers");