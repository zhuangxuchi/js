/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let a=1;
    let b;
    let c='';
    let x=[['1']];
    for(let i=0;i<n-1;i++){
        for(let j=0,len=x[i][0].length;j<len;j++){
            if(x[i][0][j+1]==x[i][0][j]){
                a++;
            }else{
                b=a.toString()+x[i][0][j].toString();
                c+=b
                a=1;
            }
        }x.push([c]);
        c='';
    }return x[n-1].toString()
};
console.log(countAndSay(6))