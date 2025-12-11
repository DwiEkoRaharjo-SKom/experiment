const readline = require("readline-sync");

const firstNum = +readline.question("Enter first number: ");
const secondNum = +readline.question("Enter second number: ");
const ask = +readline.question("What is " + firstNum + " + " + secondNum + "? ");
const ans = ask === firstNum + secondNum;

console.log(firstNum + " + " + secondNum + " = " + ask + " is " + ans);