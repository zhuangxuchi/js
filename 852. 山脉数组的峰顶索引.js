/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    let a=[];
    for(let i=1,len=A.length;i<len;i++){
        if(A[i-1]>A[i]){
            return i-1;
        }
    }
};