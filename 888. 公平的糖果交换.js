/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    let a=0;
    let b=0;
    let alen=A.length;
    let blen=B.length
    for(let i=0;i<alen;i++){
        a+=A[i]
    }
    for(let i=0;i<blen;i++){
        b+=B[i]
    }
    for(let i=0;i<alen;i++){
        for(let j=0;j<blen;j++){
            if(a>b && A[i]-B[j]==(a-b)/2){
                return [A[i],B[j]]
            }else if(a<b && A[i]-B[j]==(a-b)/2){
                return [A[i],B[j]]
            }
        }
    }
};