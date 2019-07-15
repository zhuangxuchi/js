/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
    if(A.length<3){
        return false;
    };
    if(A[0]>=A[1] || A[A.length-1]>=A[A.length-2]){
        return false;
    }
    let a=0;
    for(let i=1,len=A.length;i<len;i++){
        if(A[i-1]==A[i]){
            return false;
        }
        if(a==0){
            if(A[i-1]>A[i]){
                a=1;
            }
        }else{
            if(A[i-1]<A[i]){
                return false;
            }
        }
    }
    if(a==1){
        return true;
    }
};