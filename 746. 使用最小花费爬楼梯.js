/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    cost.push(0);
    cost.push(0);
    cost.unshift(0);
    cost.unshift(0);
    let m=new Map();
    let opt=function(x){
        if(x==0){
            return cost[0];
        }else if(x==1){
            return Math.min(cost[0],cost[1]);
        }else{
            if(!m.has(x)){
                let a=opt(x-1)+cost[x];
                let b=opt(x-2)+cost[x];
                let c=Math.min(a,b);
                m.set(x,c)
                return c
            }return m.get(x)
        }
    }
    return opt(cost.length-1)
};