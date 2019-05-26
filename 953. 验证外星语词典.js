/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    if(words.length<2){return true};
    let duibi=function(a,b){
        for(let j=0;j<a.length||j<b.length;j++){
            if(a[j]!==b[j]&&b[j]!==undefined){return(order.indexOf(b[j])>order.indexOf(a[j]))}
            if (a[j]===undefined){return true}
            if (b[j]===undefined){return false}
        }
    };
    for(let i=0;i<words.length-1;i++){
        if(duibi(words[i],words[i+1])==false){return false}
    }return true
};
