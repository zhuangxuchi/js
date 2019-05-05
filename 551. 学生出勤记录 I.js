/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    S=s.split('');
    let a=0;
    let l=0;
    for(let i=0;i<S.length;i++){
        if(S[i]=='A'){a+=1}
        else if(S[i]=='L'){
            if(S[i+1]=='L'&&S[i+2]=='L'){
                return false;
            }
        }
    }if(a<=1){return true}return false;
};