/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let a=0;
    let b=0;
    for(let i=s.length-1;i>=0;i--){
        if(s[i]!=' '){
            a++;
            b=1;
        }else if(b==1){
            return a;
        }
    }return a;
};