/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let stack_idx = -1;

    for(let i = 0; i < s.length; i++) {
        if(isOpen(s[i])) {
            stack[++stack_idx] = s[i];
        } else if(isMatch(stack[stack_idx], s[i])){
            stack[stack_idx--] = 0;
        } else {
            return false;
        }
    }
    return stack[0] === 0;
};

function isOpen(br) {
    return br === '(' || br === '{' || br === '[';
}

function isMatch(br1, br2) {
    switch(br1) {
        case '(':
            return br2 === ')';
            break;
        case '{':
            return br2 === '}';
            break;
        case '[':
            return br2 === ']';
            break;
        default:
            return false;
    }
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([])"));
console.log(isValid("("));

