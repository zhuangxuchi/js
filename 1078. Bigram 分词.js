/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
    text=text.split(' ');
    let c=[]
    for(let i=0,len=text.length-2;i<len;i++){
        if(text[i]==first && text[i+1]==second){
            c.push(text[i+2])
        }
    }return c
};