/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    nums[nums.length - 1] = 0;

    for(let i = nums.length - 2; i >= 0; i--) {
        let min = Infinity;
        for(let j = nums[i] + i; j > i; j--) {
            if(j < nums.length) {
                min = Math.min(min, nums[j]);
            }
        }
        nums[i] = min + 1;
    }

    return nums[0];
};

const test = [0];
console.log(jump(test));

const nums = [2, 3, 1, 1, 4];
console.log(jump(nums));

const nums2 = [2, 3, 0, 1, 4];
console.log(jump(nums2));

const more = [2, 1];
console.log(jump(more));
