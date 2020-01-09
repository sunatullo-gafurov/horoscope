const day = 25;
const month = 8;

const CAPRICORN = 'Capricorn';
const AQUARIUS = 'Aquarius';
const PISCES = 'Pisces';
const ARIES = 'Aries';
const TAURUS = 'Taurus';
const GEMINI = 'Gemini';
const CANCER = 'Cancer';
const LEO = 'Leo';
const VIRGO = 'Virgo';
const LIBRA = 'Libra';
const SCORPIO = 'Scorpio';
const SAGITTARIUS = 'Sagittarius';

let sign;

if (month === 1) {
    if (day <= 20) {
        sign = CAPRICORN;
    } else {
        sign = AQUARIUS;
    }
} else if (month === 2) {
    if (day <= 19) {
        sign = AQUARIUS;
    } else {
        sign = PISCES;
    }
} else if (month === 3) {
    if (day <= 20) {
        sign = PISCES;
    } else {
        sign = ARIES;
    }
} else if (month === 4) {
    if (day <= 20) {
        sign = ARIES;
    } else {
        sign = TAURUS;
    }
} else if (month === 5) {
    if (day <= 21) {
        sign = TAURUS;
    } else {
        sign = GEMINI;
    }
} else if (month === 6) {
    if (day <= 21) {
        sign = GEMINI;
    } else {
        sign = CANCER;
    }
} else if (month === 7) {
    if (day <= 22) {
        sign = CANCER;
    } else {
        sign = LEO;
    }
} else if (month === 8) {
    if (day <= 22) {
        sign = LEO;
    } else {
        sign = VIRGO;
    }
} else if (month === 9) {
    if (day <= 23) {
        sign = VIRGO;
    } else {
        sign = LIBRA;
    }
} else if (month === 10) {
    if (day <= 23) {
        sign = LIBRA;
    } else {
        sign = SCORPIO;
    }
} else if (month === 11) {
    if (day <= 22) {
        sign = SCORPIO;
    } else {
        sign = SAGITTARIUS;
    }
} else if (month === 12) {
    if (day <= 21) {
        sign = SAGITTARIUS;
    } else {
        sign = CAPRICORN;
    }
}

console.log(sign);