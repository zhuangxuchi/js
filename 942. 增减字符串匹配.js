/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    let a=[];
    let b;
    let A=[];
    for(let i=0,len=S.length;i<=len;i++){
        a.push(i);
    };
    for(let i=0,len=S.length;i<len;i++){
        if(S[i]=='I'){
            b=a.splice(0,1);
            A.push(b[0]);
        }else{
            b=a.splice(-1,1);
            A.push(b[0]);
        }
    }A.push(a[0]);
    return A;
};