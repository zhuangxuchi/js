/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let i=0;
    while(x!=0||y!=0){
        if ((x%2)!=(y%2)){
            i++;
        }
    x>>=1;
    y>>=1;
    }return i;
};
