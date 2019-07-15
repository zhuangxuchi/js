/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function(target) {
    let a=0;
    let b=1;
    for(let i=1;i<target*2;i++){
        if(i+a<target){
            a+=i;
            b++;
        }else if(i+a>target){
            a-=i;
            b++;
        }else{
            return b;
        }
    }
};
console.log(reachNumber(4))