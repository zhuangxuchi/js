/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    cost.push(0);
    cost.push(0);
    cost.unshift(0);
    cost.unshift(0);
    let len= cost.length;
    let arr=[]
    for(let i=0;i<len;i++){
        arr.push(0);
    }
    arr[0]=cost[0];
    arr[1]=cost[1];
    for(let i=2;i<len;i++){
        arr[i]=Math.min(arr[i-1],arr[i-2])+cost[i]
    }return arr[len-1]
};