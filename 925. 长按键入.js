/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    name=name.split('');
    typed=typed.split('');
    let j=0;
    for(let i=0;i<typed.length;i++){
        if(j<name.length && name[j]==typed[i]){
            j++
        }else if(j==0){
            return false
        }else if(typed[i]!=typed[i-1]){
            return false;
        }
    }
    return j==name.length;
};