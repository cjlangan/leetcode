/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let w = 1;

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] != nums[i - 1]) {
            nums[w++] = nums[i];
        }
    }

    return w;
};


const nums = [0,0,1,1,1,2,2,3,3,4];
const vars = [1, 1, 1];
const test = [1, 2];

console.log(removeDuplicates(nums));
console.log(nums);

console.log(removeDuplicates(vars));
console.log(vars);

console.log(removeDuplicates(test));
console.log(test);
