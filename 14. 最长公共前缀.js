/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length==0){return '';}
    if(strs.length==1){return strs[0];}
    let c='';
    let d=strs[0].length;
    for(let i=1;i<strs.length;i++){
        if(d>strs[i].length){
            d=strs[i].length;
        }
    }
    for(let j=0;j<d;j++){
        for(let i=1;i<strs.length;i++){
            if(strs[0][j]!=strs[i][j]){
                return c;
            }
        }c+=strs[0][j];
    }return c;
};