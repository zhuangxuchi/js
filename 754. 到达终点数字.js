/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function(target) {
    let a=0;
    let b=0;
    if(target<0){
        target=-target;
    };
    if(target<=1){
        return target;
    };
    while(1){
        b++;
        a+=b;
        if(a>=target && (a-target)%2==0){
            return b
        }
    }
};
console.log(reachNumber(8))
//1+2+3+4