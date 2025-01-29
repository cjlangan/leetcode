/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let eStart = s.length - 1;
    let e = eStart;
    let b = 0;

    while(b <= e) {
        while(e < s.length) {
            let isPal = true;
            let i = b;
            let j = e;
            while(i <= j && isPal) {
                if(s[i] !== s[j]) {
                    isPal = false;
                }
                i++;
                j--;
            }
            if(isPal) {
                return s.substring(b, e + 1);
            }
            b++;
            e++;
        }
        b = 0;
        e = --eStart;
    }
    return s[0];
};

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("aacabdkacaa"));

