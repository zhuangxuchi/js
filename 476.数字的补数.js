/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let a=num.toString(2)
    let b=[];
    for (let i=0;i<a.length;i++){
        if(a[i]==0){
            b.push(1);
        }else {b.push(0)}
    }let c=parseInt(b.join(''),2);
    return c;
};
