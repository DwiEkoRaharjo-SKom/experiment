const readline = require("readline-sync");

const num = +readline.question("Enter a number: ");

if (num % 2 !== 0){
  console.log(num + " is odd");
} else {
  console.log(num + " is even");
}