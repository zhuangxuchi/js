/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    var x = A + ' ' + B;
    x=x.split(' ');
    var count={};
    var y=[];
    for (let i=0;i<x.length;i++){
        if (count[x[i]]){
            count[x[i]]+=1;
        }else{
            count[x[i]]=1;
        }
    }
    for(let j in count){
        if (count[j]==1){
            y.push(j)
        }
    }return y;
};