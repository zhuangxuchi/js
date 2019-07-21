/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    A=A.sort(function(a,b){return a-b});
    for(let i=0,len=A.length/2+1;i<len;i++){
        if(A[i]==A[i+1]){
            return A[i]
        }
    }
};