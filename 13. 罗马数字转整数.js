var romanToInt = function(s) {
    let x=0;
    const m={'M':1000,'D':500,'C':100,'L':50,'X':10,'V':5,'I':1};
    for(let i=0;i<s.length;i++){
        if (m[s[i]]<m[s[i+1]]){
            x+=(m[s[i+1]]-m[s[i]]);
            i++;
        }else{
            x+=m[s[i]];
        }
    }return x;
};
