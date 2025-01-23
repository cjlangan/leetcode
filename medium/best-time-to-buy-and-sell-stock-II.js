/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let p = 0;
    let poss = 0;
    let prev = 0;
    let buy = prices[0];

    for(let i = 1; i < prices.length; i++) {
        if(prices[i] < prices[prev]) {
            p += poss;
            buy = prices[i];
            poss = 0;
        }
        else if(prices[i] > prices[prev]){
            poss = prices[i] - buy;
        }
        prev++;
    }
    p += poss;

    return p;
};

const prices = [7, 1, 5, 3, 6, 4];
const pri = [1, 2, 3, 4, 5];
const pr = [7, 6, 4, 3, 1];

console.log(maxProfit(prices));
console.log(maxProfit(pri));
console.log(maxProfit(pr));
