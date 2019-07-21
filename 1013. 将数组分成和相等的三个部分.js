/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
    let sum=0;
    let len=A.length;
    let a=0;
    let res=0;
    for(let i=0;i<len;i++){
        sum+=A[i];
    }
    let b=sum/3;
    if(b%1!==0){
        return false;
    }
    for(let i=0;i<len;i++){
        a+=A[i];
        if(res<2 && a==b){
            a=0;
            res++;
        }
    }
    if(a==b){
        return true
    }else{
        return false
    }
};