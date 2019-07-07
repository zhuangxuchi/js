/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let s=new Set();
    let a=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    for(i=0,len=words.length;i<len;i++){
        let b='';
        for(let j=0,len=words[i].length;j<len;j++){
            let c=words[i].charCodeAt(j)-97;
            b+=a[c];
        };
        s.add(b)
    }return s.size
};