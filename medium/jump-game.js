/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let left = nums.length - 1;

    for(let i = left - 1; i >= 0; i--) {
        if(i + nums[i] >= left) {
            left = i;
        }
    }
    return left === 0;
};

const nums = [2, 3, 1, 1, 4];
console.log(canJump(nums));

const nums2 = [3, 2, 1, 0, 4];
console.log(canJump(nums2));

const nums3 = [1, 0, 8, 0];
console.log(canJump(nums3));

// Naive Solution using memoization
/* 
var canJump = function(nums) {
    // Initialise a table to all null
    const arr = [];
    for(let i = 0; i < nums.length; i++) {
        arr[i] = false;
    }

    return canJumpHelper(nums, 0, arr);
};

function canJumpHelper(nums, i, arr) {
    // If entry already has a branch or if 
    // we have reached the end, ignore
    if(arr[i] || i >= nums.length) {
        return false;
    }
    arr[i] = true;

    // If reached end, we are done
    if(i === nums.length - 1) {
        return true;
    }
    let val = false;

    // Create a branch for each possible jump 
    for(let j = 1; j <= nums[i]; j++) {
        // Will be true if any branch is true
        val = val || canJumpHelper(nums, i + j, arr);
    }
    return val;
}
*/

