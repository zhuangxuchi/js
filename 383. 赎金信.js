/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let x=0;
    magazine=magazine.split("");
    for (let i =0;i<ransomNote.length;i++){
        if((x=magazine.indexOf(ransomNote[i]))>-1){
            magazine[x]=0;
        }else {
            return false;
        }
    }
    return true;
};
