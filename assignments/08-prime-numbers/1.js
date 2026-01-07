const readline = require('readline-sync');


// --- INPUT & VALIDATION ---

// Initial prompt for users
let input = +readline.question('Enter the number of prime numbers: ');

// Input Validation Loop:
while(isNaN(input) || input <= 0){
    input = +readline.question('Invalid input!. Please enter the positive number of prime numbers: ');
}


// --- PROCESS DATA ---
const resultObject = getFirstNPrimes(input);


// --- OUTPUT RESULT ---

console.log (`\nThe first ${input} prime numbers are`);

for (const sequence in resultObject) {
    console.log(resultObject[sequence]);
}



// --- HELPER FUNCTIONS ---

/**
 * Generates an Object containing the first n prime numbers.
 * Uses numeric keys (1, 2, 3...) to simulate an ordered list,
 * @param {number} limit 
 * @returns {Object}
 */
function getFirstNPrimes(limit) {
    
    let currentNumber = 1;
    let key = 1;
    const primeObject = {};
    while (key <= limit) {
        if (isPrime(currentNumber)){
        primeObject[key] = currentNumber;
        key++
        }
    currentNumber++;   
    }

return primeObject;

}

/**
 * Determines if a number is prime using an optimized primality test.
 * Efficiency: O(sqrt(n)).
 * Mathematical Logic: The condition (i * i <= n) is functionally equivalent to (i <= sqrt(n)), ensuring all potential factors are checked efficiently.
 * @param {number} num 
 * @returns {boolean}
 */
function isPrime(num) {

    if (num < 2) return false;
    
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;

}
