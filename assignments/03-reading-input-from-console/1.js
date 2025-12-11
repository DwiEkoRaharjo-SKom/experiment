const readline = require("readline-sync");

const firstNum = +readline.question("Enter first number: ");
const secondNum = +readline.question("Enter second number: ");
const thirdNum = +readline.question("Enter third number: ");
const average = (firstNum + secondNum + thirdNum) / 3;

console.log("\n" + "The average of " + firstNum + ", " + secondNum + ", " + thirdNum + " is " + average);