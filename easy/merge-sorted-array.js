/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    const temp = [];
    let idx = 0, i = 0, j = 0;

    while(i < m && j < n) {
        temp[idx] = nums1[idx];
        nums1[idx++] = temp[i] < nums2[j] ? temp[i++] : nums2[j++];
    }
    while(i < m) {
        temp[idx] = nums1[idx];
        nums1[idx++] = temp[i++];
    }
    while(j < n) {
        nums1[idx++] = nums2[j++];
    }
};

const nums1 = [1,2,3,0,0,0]; 
const nums2 = [2,5,6];

console.log(merge(nums1, 3, nums2, 3));
