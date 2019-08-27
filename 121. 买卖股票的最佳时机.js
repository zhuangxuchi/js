/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max=0,
    min=prices[0],
    len=prices.length;
    for(let i=1;i<len;i++){
        max=Math.max(prices[i]-min,max);
        min=Math.min(prices[i],min)
    }
    return max
};