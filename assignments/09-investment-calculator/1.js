/**
 * Assignment-9: Investment Calculator (Object-Oriented Version)
 * Description: Using Objects to encapsulate investment data and logic.
 */

const readline = require('readline-sync');

const PERCENT_TO_DECIMAL_CONVERTER = 0.01;
const MONTHS_IN_YEAR = 12;

const initialInvestment = +readline.question('Please enter the investment amount: ');
const rateInPercent = +readline.question('Please enter the annual interest rate: ');
const projectionYears = +readline.question('Please enter the investment duration: ');

// Investment Object Encapsulation
const investmentAccount = {
    principal: initialInvestment,
    annualRate: rateInPercent * PERCENT_TO_DECIMAL_CONVERTER,
    duration: projectionYears,
    
    // a Nested Object to store yearly results    
    projections: {},

    // Method to calculate and populate the 'projections' nested object
    generateReport: function() {
        for (let year = 1; year <= this.duration; year++) {
            const totalMonths = year * MONTHS_IN_YEAR;
            const futureValue = this.principal * (1 + (this.annualRate / MONTHS_IN_YEAR)) ** totalMonths;
            const key = "Year" + year;

            // Creating a nested object for each specific year
            this.projections[key] = {
                displayYear: year,
                calculatedValue: futureValue
            };
        }
    },
};

// Process the calculations
investmentAccount.generateReport();

console.log(`\n\nThe amount invested: ${investmentAccount.principal}`);
console.log(`Annual interest rate: ${rateInPercent}`);
console.log(`Years to project: ${investmentAccount.duration}\n`);

// Iterate through the Nested Object
for (const key in investmentAccount.projections) {
    const report = investmentAccount.projections[key];
    const formattedValue = manualMoneyFormat(report.calculatedValue); // Apply manual formatting to exactly match the program should look like
    console.log(`Year ${report.displayYear}, value: ${formattedValue}`);
}


// --- HELPER FUNCTIONS ---

/**
 * Formats a number to 2 decimal places manually using integer math.
 * This avoids floating-point rounding errors and ensures truncation.
 * * @param {number} number - Raw calculation result.
 * @returns {string} - Formatted result in string format (X.XX).
 */
function manualMoneyFormat(number) {
    // Shift decimal 2 places right and truncate to keep only 2 decimal precision
    const roundedTotal = Math.floor(number * 100);

    // Extraction logic
    const integerPart = Math.floor(roundedTotal / 100);
    const decimalPart = roundedTotal % 100;

    // Zero-padding for decimal parts less than 10 (e.g., 5 cents becomes "05")
    let decimalString = (decimalPart < 10) ? "0" + decimalPart : "" + decimalPart;

    return `${integerPart}.${decimalString}`;
}