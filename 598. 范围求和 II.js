/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    let a=m;
    let b=n;
    for(let i=0;i<ops.length;i++){
        if(ops[i][0]<a){
            a=ops[i][0];
        }
    }
    for(let i=0;i<ops.length;i++){
        if(ops[i][1]<b){
            b=ops[i][1];
        }
    }return a*b;
};