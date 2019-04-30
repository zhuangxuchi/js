/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    let n=1;
    let tmp=0;
    let res='';
    let absnum = Math.abs(num)
    while (absnum > 0){
        tmp = absnum % 7;
        absnum=parseInt(absnum / 7);
        res = tmp+res ;
    }
    if (num<0){res ='-'+res};
    if (num==0){res='0'};
    return res;
};