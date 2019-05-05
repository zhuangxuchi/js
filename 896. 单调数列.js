/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    let a=1;
    let b=1;
    for (let i=0;i<A.length-1;i++){
        if(A[i+1]>=A[i]){
            a+=1;
        }
    }if(a==A.length){return true};
    for (let i=0;i<A.length-1;i++){
        if(A[i+1]<=A[i]){
            b+=1;
        }
    }if(b==A.length){return true};
    return false;
};
