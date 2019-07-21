/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if(num<0){
        num+=4294967296
    }
    let a;
    let res='';
    let m=new Map([[10,'a'],[11,'b'],[12,'c'],[13,'d'],[14,'e'],[15,'f']])
    while(num>=16){
        a=num%16;
        if(a>=10){
            a=m.get(parseInt(a));
            res=a+res;
        }else{
            res=parseInt(a)+res;
        }
        num=num/16;
    }
    if(num>=10){
        a=m.get(parseInt(num));
        res=a+res;
    }else{
        res=parseInt(num)+res;
    }return res;
};