/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    S=S.split('');
    T=T.split('');
    let s=[];
    let t=[];
    for(let i=0;i<S.length;i++){
        if(S[i]!='#'){
            s.push(S[i]);
        }else{s.pop()}
    }
    for(let i=0;i<T.length;i++){
        if(T[i]!='#'){
            t.push(T[i]);
        }else{t.pop()}
    }
    s=s.join('');
    t=t.join('');
    return s==t;
};