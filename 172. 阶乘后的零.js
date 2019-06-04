/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let a=0;
    while(n>=5){
        n=parseInt(n/5)
        a+=n
    }return a;
};