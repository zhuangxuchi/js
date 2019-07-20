/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let f=(c/2)**0.5
    for(let i=0;i<=f;i++){
        if((c-i*i)**0.5%1==0){
            return true
        }
    }return false;
};
console.log(judgeSquareSum(999999999))