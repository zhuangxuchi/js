/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let res=0;
    let a=g.sort(function(a,b){return a-b});
    let b=s.sort(function(a,b){return a-b});
    let glen=g.length;
    let slen=s.length;
    for(let i=0,j=0;i<glen,j<slen;j++){
        if(a[i]<=b[j]){
            res++;
            i++;
        }
    }return res
};