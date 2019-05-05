/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
    if(A==''&B==''){return true}
    a=A.split('');
    b=B.split('');
    let c;
    let d=0;
    for(let i=0;i<a.length;i++){
        c=a.shift();
        a.push(c);
        for(let j=0;j<a.length&&j<b.length;j++){
            if(a[j]==b[j]){
                d+=1
            }
        }if(d==a.length){return true}
        else {d=0}
    }return false;
};