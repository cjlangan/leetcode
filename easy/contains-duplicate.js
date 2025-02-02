/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const myMap = new Map();
    let dupes = false;

    for(let i = 0; i < nums.length && !dupes; i++) {
        if(myMap.get(nums[i]) != undefined) {
            dupes = true;
        } else {
            myMap.set(nums[i], i);
        }
    }
    return dupes;
};

const nums = [4, 3, 5, 7, 8, 6, 1];
console.log(containsDuplicate(nums));

const nums2 = [4, 3, 5, 7, 8, 6, 4, 9];
console.log(containsDuplicate(nums2));

