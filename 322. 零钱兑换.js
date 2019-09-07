/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let res,
    arr=[0];
    for(let i=1;i<=amount;i++){
        res=Infinity;
        for(let j=0,len=coins.length;j<len;j++){
            if(i-coins[j]>=0){
                res=Math.min(res,arr[i-coins[j]]+1);
            }
        }
        arr.push(res);
    }return arr[amount]==Infinity ? -1 : arr[amount];
};