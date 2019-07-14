/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
    S=S.split('-');
    S=S.join('');
    let a = S.length%K;
    let b = parseInt(S.length/K);
    let c=0;
    let res='';
    if(a!=0){
        for(let i=0;i<a;i++){
            if(/[a-z]/.test(S[c])){
                res+=S[c].toUpperCase();
            }else{
                res+=S[c];
            }
            c++;
        };
        res+='-';
    }
    for(let i=0;i<b;i++){
        for(let j=0;j<K;j++){
            if(/[a-z]/.test(S[c])){
                res+=S[c].toUpperCase();
            }else{
                res+=S[c];
            }
            c++;
        };
        res+='-';
    };
    res=res.substring(0,res.length-1)
    return res
};