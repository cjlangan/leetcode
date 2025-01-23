/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let lcs = "";
    let bool = true;
    let i = 0;

    while(bool && i < strs[0].length) {
        let word = 0;
        let ch = strs[word++][i];

        while(bool && word < strs.length) {
            if(i < strs[word].length) {
                bool = strs[word][i] === ch;
            } else {
                bool = false;
            }
            word++;
        }
        if(bool) {
            lcs += ch;
        }
        i++;
    }

    return lcs;
};

const words = ["flower","flow","flight"];
const stuff = ["dog","racecar","car"];
const fail = ["ab", "a"];
const other = ["cir", "car"];


console.log(longestCommonPrefix(other));
console.log(longestCommonPrefix(fail));
console.log(longestCommonPrefix(words));
console.log(longestCommonPrefix(stuff));
