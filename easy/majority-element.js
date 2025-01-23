/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let dictionary = {};
    let majorVal = Math.floor(nums.length / 2) + 1;

    for(let i = 0; i < nums.length; i++) {
        let key = nums[i].toString();

        console.log(dictionary);

        // Add incrementation for number of value seen
        if(!dictionary.hasOwnProperty(key)) {
            dictionary[key] = 0;
        }

        // Check if it is majority
        if(++dictionary[key] >= majorVal) {
            return nums[i];
        }
    }
};

const nums = [3, 2, 3];

const vals = [2,2,1,1,1,2,2];

console.log(majorityElement(nums));
console.log(majorityElement(vals));
