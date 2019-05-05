/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    s=s.split('');
    for(let i=0;i<t.length;i++){
        x=s.indexOf(t[i])
        if (x==-1){return t[i]}
        else{s.splice(x,1)}
    }
};