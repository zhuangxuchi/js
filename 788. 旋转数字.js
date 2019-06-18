/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
    let n=0;
    for(let i=1;i<=N;i++){
        let a=i.toString();
        if(a.indexOf(3)!=-1||a.indexOf(4)!=-1||a.indexOf(7)!=-1){
            continue
        };
        if(a.indexOf(2)!=-1||a.indexOf(5)!=-1||a.indexOf(6)!=-1||a.indexOf(9)!=-1){
            n++;
        }
    }return n;
};