/**
* @param {string} s
* @return {number}

*/

function value(roman) {
    switch(roman) {
        case 'I':
            return 1;
            break;
        case 'V':
            return 5;
            break;
        case 'X':
            return 10;
            break;
        case 'L':
            return 50;
            break;
        case 'C':
            return 100;
            break;
        case 'D':
            return 500;
            break;
        case 'M':
            return 1000;
            break;
    }
}

var romanToInt = function(s) {
    let total = 0;

    for(let i = 0; i < s.length; i++) {
        switch(s.charAt(i)) {
            case 'V':
            case 'L':
            case 'D':
            case 'M':
                total += value(s.charAt(i));
                break;
            case 'I':
            case 'X':
            case 'C':
                if(i + 1 < s.length && value(s.charAt(i + 1)) == 10 * value(s.charAt(i))
                    || value(s.charAt(i + 1)) == 5 * value(s.charAt(i))) {
                    total += value(s.charAt(i + 1)) - value(s.charAt(i));
                    i++;
                }
                else {
                    total += value(s.charAt(i));
                }
                break;
        }
    }
    return total;
}

console.log(romanToInt("III"));
console.log(romanToInt("VI"));
console.log(romanToInt("IX"));
console.log(romanToInt("MDI"));
console.log(romanToInt("XV"));
console.log(romanToInt("CMVIX"));
console.log(romanToInt("MCMXCIV"));
