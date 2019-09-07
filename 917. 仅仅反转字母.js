/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    s=S.split('');
    let a=0;
    let c=[];
    let d=[];
    for(let i=S.length-1;i>=0;i--){
        if((s[i].charCodeAt()>=65&&s[i].charCodeAt()<=90)||(s[i].charCodeAt()>=97&&s[i].charCodeAt()<=122)){
            c.push(s[i])
        }else{
            d[a]=[i,s[i]];
            a++;
        }
    }
    for(let j=d.length-1;j>=0;j--){
       c.splice(d[j][0],0,d[j][1])
    }return c.join('');
};