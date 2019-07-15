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
    while(a<target || (a-target)%2!==0){
        b++;
        a+=b;
    }return b
};