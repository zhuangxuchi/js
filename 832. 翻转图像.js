/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    let B=[];
    for(let i=0,len=A.length;i<len;i++){
        let C=[];
        for(let j=0,len=A[i].length;j<len;j++){
            let a=A[i].pop();
            C.push(a);
        }
        B.push(C);
    }for(let i=0,len=B.length;i<B.length;i++){
        let c=[];
        for(let j=0,len=B[i].length;j<len;j++){
            if(B[i][j]==1){
                c.push(0);
            }else{
                c.push(1);
            }
        }B[i]=c;
    }
    return B;
};