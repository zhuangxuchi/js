/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
    var map = {"a":1, "e":1, "i":1, "o":1, "u":1, "A":1, "E":1, "I":1, "O":1, "U":1}
    S=S.split(' ');
    var a='ma';
    for (let i=0;i<S.length;i++){
        a+='a'
        if (map[S[i][0]]==1){
            S[i]+=a;
        }
        else {
            S[i]=S[i]+S[i][0]+a;
            S[i]=S[i].substr(1);
        }
    }return S.join(' ');
};
