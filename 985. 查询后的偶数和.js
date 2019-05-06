/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
    let y=[];
    let x=0;
    for(let j=0;j<A.length;j++){
        if(A[j]%2==0){x+=A[j];}
    }
    for (let i=0;i<A.length;i++){
        let val=queries[i][0];
        let index=queries[i][1];
        if (A[index]%2==0){
            x-=A[index];
        }
        A[index]=A[index]+val;
        if (A[index]%2==0){
            x+=A[index];
        }
        y.push(x);
    }return y;
};