/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    if(s.length<2){
        return false;
    }
    let a=s[0];
    let b;
    b=s.split(a);
    b=b.join('');
    if(!isNaN(b)){
        return true;
    }
    for(let i=1,len=parseInt(s.length/2);i<len;i++){
        if(s.length%(+1)!==0){
            a+=s[i];
            continue;
        };
        a+=s[i];
        b=s.split(a);
        b=b.join('');
        if(!isNaN(b)){
            return true;
        }
    }return false;
};