/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    // Fill array with all zeros
    // 1000 is the max size of num citations for a paper
    const arr = new Array(1001).fill(0);
    let counter = 0;

    // Each index in arr tracks number of papers with that many citations
    for(let i = 0; i < citations.length; i++) {
        arr[citations[i]]++;
    }

    // analyze from right to left until get counter > idx
    for(let i = arr.length - 1; i >= 0; i--) {
        counter += arr[i];

        if(counter >= i) {
            return i;
        }
    }
    return 0;
};

const arr = [3, 0, 6, 1, 5];
console.log(hIndex(arr));

const arr2 = [1, 3, 1];
console.log(hIndex(arr2));

const arr3 = [0,0,0,0,0,0,0];
console.log(hIndex(arr3));

const arr4 = [0, 2, 1000];
console.log(hIndex(arr4));


