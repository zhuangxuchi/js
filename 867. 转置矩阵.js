/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    var tArray=[];
    for (let k=0;k<A[0].length;k++){
        tArray[k]=[];
    }
    for (let i=0;i<A.length;i++){
        for (let j=0;j<A[i].length;j++){
            tArray[j][i]=A[i][j];
        }
    }
    return tArray;
};