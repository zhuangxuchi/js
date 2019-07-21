/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function(A, K) {
    if(A.length==1){
        return 0
    }
    let a=Math.max.apply(null,A);
    let b=Math.min.apply(null,A);
    if(a-K<=b+K){
        return 0
    }else{
        return a-b-2*K
    }
};