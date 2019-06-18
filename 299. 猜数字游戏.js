/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let a=0;
    let b=0;
    let s=secret.split('');
    let g=guess.split('');
    for(let i=0;i<g.length;i++){
        if(s[i]==g[i]){
            a++;
            s.splice(i,1);
            g.splice(i,1);
            i--;
        }
    };
    for(let i=0;i<s.length;i++){
        for(let j=0;j<g.length;j++){
            if(s[i]==g[j]){
                b++;
                s.splice(i,1);
                g.splice(j,1);
                i--;
                j--;
            }
        }
    }return a.toString()+'A'+b.toString()+'B'
};