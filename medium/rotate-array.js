/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let numT = 0;
    let startIdx = 0;
    let i = 0;
    let val = nums[0];

    // Make transfers until we have moved every element
    while(numT < nums.length) {
        let nextIdx = (i + k) % nums.length;
        let temp = nums[nextIdx];
        nums[nextIdx] = val;
        val = temp;
        i = nextIdx;
        numT++;

        // Switch chain if come back to start
        if(i === startIdx) {
            startIdx++;
            i = startIdx
            val = nums[i];
        }
    }
}

const nums = [-1, -100, 3, 99];

rotate(nums, 2);

console.log("\nFinal: " + nums.toString());


/* Naiive solution
var rotate = function(nums, k) {
    let val = nums[0];

    for(let i = 0; i < nums.length * k; i++) {
        let temp = nums[(i + 1) % nums.length];
        nums[(i + 1) % nums.length] = val;
        val = temp;

        if((i + 1) % nums.length === 0) {
            val = nums[0];
        }
    }
};
*/

