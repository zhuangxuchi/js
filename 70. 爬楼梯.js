/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n==1){
        return 1
    }else if(n==2){
        return 2
    }
    let a=1,
    b=2,
    c=3;
    for(let i=2;i<n;i++){
        c=a+b;
        a=b;
        b=c;
    }return c
};