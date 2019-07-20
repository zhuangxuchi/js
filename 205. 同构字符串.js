/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let a=[];
    let A=[];
    let x=0;
    for(let i=0,len=s.length;i<len;i++){
        if(a.indexOf(s[i])==-1){
            a.push(s[i]);
            A.push(x);
            x++;
        }else{
            A.push(a.indexOf(s[i]))
        }
    };
    let b=[];
    let B=[];
    let y=0;
    for(let i=0,len=t.length;i<len;i++){
        if(b.indexOf(t[i])==-1){
            b.push(t[i]);
            B.push(y);
            y++;
        }else{
            B.push(b.indexOf(t[i]))
        }
    }
    for(let i=0,len=A.length;i<len;i++){
        if(A[i]!==B[i]){
            return false
        }
    }return true;
};