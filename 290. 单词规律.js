/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    str=str.split(' ');
    if(pattern.length!=str.length){
        return false
    };
    let a={};
    let b={};
    for(let i=0,len=str.length;i<len;i++){
        if((pattern[i] in a && a[pattern[i]]!=str[i]) || (str[i] in b && b[str[i]]!=pattern[i])){
            return false;
        }else{
            a[pattern[i]]=str[i];
            b[str[i]]=pattern[i];
        }
    }return true;
}