/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let x=0;
    let y=1;
    for (let i = 1 ; i<=s.length;i++){
        x+=(s[s.length -i].charCodeAt()-64)*y;
        y*=26;
    }return x;
};