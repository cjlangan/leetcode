// DID NOT FINISH, 16/21


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map();
    let arr = [];
    let len = 0;

    // Add and count each number;
    for(let i = 0; i < nums.length; i++) {
        // If in, increase count, keep idx same
        if(map.get(nums[i]) !== undefined) {
            // Get data of number
            let [count, idx] = map.get(nums[i]);
            count++;
            map.set(nums[i], [count, idx]); // increase counter

            // Move to left while it is bigger
            let bigger = true;
            for(let offset = 1; idx - offset >= 0 && bigger; offset++) {
                // Get other data
                let left = idx - offset;
                let right = idx - offset + 1;
                let [otherCount, otherIdx] = map.get(arr[left]);

                // if counter is bigger than one ahead, swap
                if(count > otherCount) {
                    // Swap array positions
                    arr[right] = arr[left];
                    arr[left] = nums[i];

                    // Set indicies in hash map
                    map.set(nums[i], [count, left]);
                    map.set(arr[right], [otherCount, right]);
                } else {
                    // if not bigger, exit the loop
                    bigger = false;
                }
            }
        } else {
            // Initialise with counter of 1, and at end of arr, if not exist
            map.set(nums[i], [1, len]);
            arr[len++] = nums[i];
        }
    }
    let returnArr = [];

    for(let i = 0; i < k; i++) {
        returnArr[i] = arr[i];
    }

    return returnArr;
};

const nums = [1, 1, 1, 2, 2, 3];
console.log(topKFrequent(nums, 2));

const nums2 = [1];
console.log(topKFrequent(nums2, 1));

const nums3 = [1, 1, 1, 2, 2, 3, 1, 1, 1, 3, 3, 4, 4, 4, 4, 4, 6, 4, 7, 4, 4, 4];
console.log(topKFrequent(nums3, 3));

const nums4 = [4,1,-1,2,-1,2,3];
console.log(topKFrequent(nums4, 2));

const nums5 = [2,3,4,1,4,0,4,-1,-2,-1];
console.log(topKFrequent(nums5, 2));

const nums6 = [5,3,1,1,1,3,73,1];
console.log(topKFrequent(nums6, 2));
