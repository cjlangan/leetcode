/**
 * @param {number[]} nums
 * @return {number[]} */
var productExceptSelf = function(nums) {
    let n = nums.length;
    const arr = new Array(n).fill(1);
    let lprod = 1;
    let rprod = 1;

    for(let i = 1; i < n; i++) {
        lprod *= nums[i - 1];
        arr[i] *= lprod;

        rprod *= nums[n - i];
        arr[n - i - 1] *= rprod;
    }
    return arr;
};


const nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums));

const nums2 = [-1,1,0,-3,3];
console.log(productExceptSelf(nums2));
