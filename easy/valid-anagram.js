/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) {
        return false;
    }

    const map = new Map();

    // Add s contents to map
    for(let i = 0; i < s.length; i++) {
        // If exist, increment, else start at 1
        if(map.get(s[i]) !== undefined) {
            let num = map.get(s[i]);
            map.set(s[i], num + 1);
        } else {
            map.set(s[i], 1);
        }
    }   
    // Remove t contents from map
    for(let i = 0; i < s.length; i++) {
        // If exists, decrement, otherwise false
        if(map.get(t[i]) !== undefined) {
            let num = map.get(t[i]);
            map.set(t[i], num - 1);

            if(num < 0) {
                return false;
            }
        } else {
            return false;
        }
    }
    // Check for not all zeros
    for(let i = 0; i < s.length; i++) {
        if(map.get(s[i]) !== 0) {
            return false;
        }
    }
    return true;
};

let s = "anagram";
let t = "agnaram";

console.log(isAnagram(s, t));


let r = "car";
let g = "rat";

console.log(isAnagram(r, g));





