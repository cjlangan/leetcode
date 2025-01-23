/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let min = prices[0];

    for(let i = 1; i < prices.length; i++) {
        if(prices[i] < min) {
            min = prices[i];
        }
        else if(prices[i] - min > profit){
            profit = prices[i] - min;
        }
    }
    return profit;
};


const prices = [7,1,5,3,6,4];

const more_prices = [7, 6, 4, 3, 1];

console.log(maxProfit(prices));
console.log(maxProfit(more_prices));


/* Naiive solution
var maxProfit = function(prices) {

    let maxProfit = 0;

    for(let buy = 0; buy < prices.length -1; buy++) {
        for(let sell = buy + 1; sell < prices.length; sell++) {
            if(prices[sell] > prices[buy]) {
                maxProfit = Math.max(maxProfit, prices[sell] - prices[buy]);
            }
        }
    }
    return maxProfit;
};
*/
