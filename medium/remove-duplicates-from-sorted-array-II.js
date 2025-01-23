/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let w = 0;

    for(let i = 0; i < nums.length; i++) {
        if( w < 2 || nums[i] !== nums[w - 2]) {
            nums[w++] = nums[i];
        }
    }

    return w;
};


const nums = [0,0,1,1,1,2,2,3,3,4];
const vars = [1, 1, 1, 2, 2, 3];
const test = [1, 2];
const more = [0,0,1,1,1,1,2,3,3]

console.log(removeDuplicates(vars));
console.log(vars);

console.log(removeDuplicates(more));
console.log(more);

console.log(removeDuplicates(nums));
console.log(nums);

console.log(removeDuplicates(test));
console.log(test);
