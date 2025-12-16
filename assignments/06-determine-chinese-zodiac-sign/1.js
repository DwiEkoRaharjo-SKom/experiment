const readline = require('readline-sync');


const CHINESE_ZODIAC_CYCLE_LENGTH = 12;

const year = +readline.question('Enter a year: ');

const chineseZodiac = y => {
    const yearCycle = y % CHINESE_ZODIAC_CYCLE_LENGTH;

    switch (yearCycle) {
        case 0: return 'monkey';
        case 1: return 'rooster';
        case 2: return 'dog';
        case 3: return 'pig';
        case 4: return 'rat';
        case 5: return 'ox';
        case 6: return 'tiger';
        case 7: return 'rabbit';
        case 8: return 'dragon';
        case 9: return 'snake';
        case 10: return 'horse';
        case 11: return 'sheep';
    }
};

console.log(`\nThe Chinese zodiac for year ${year} is ${chineseZodiac(year)}`);