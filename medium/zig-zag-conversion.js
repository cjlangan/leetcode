/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let jump = 2 * numRows - 2;
    let row = 0;
    let str = "";

    if(numRows === 1) {
        return s;
    }

    while(row < numRows) {
        let i = row;
        let mid = jump - row;
        while(i < s.length) {
            str += s[i];
            i += jump;
            if(row !== 0 && row !== numRows - 1 && mid < s.length) {
                str += s[mid];
            }
            mid += jump;
        }
        row++;
    }
    return str;
};

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));
console.log(convert("A", 1));
console.log(convert("AL", 2));
