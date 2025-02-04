/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let curr = s.length -1;
    let len = 0;

    while(curr >= 0 && s[curr] === ' ') {
        curr--;
    }
    while(curr >= 0 && s[curr] !== ' ') {
        curr--;
        len++;
    }

    return len;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
