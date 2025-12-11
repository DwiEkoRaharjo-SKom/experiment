const readline = require("readline-sync");

const seconds = +readline.question("Enter seconds: ");
const SECONDS_IN_MINUTE = 60;
const minutes = Math.floor(seconds / SECONDS_IN_MINUTE);
const remaindSecond = seconds % SECONDS_IN_MINUTE;

console.log("\n" + seconds + " seconds is " + minutes + " minutes and " + remaindSecond + " seconds");