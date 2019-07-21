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
        a=parseInt(num%16);
        if(a>=10){
            a=m.get(a);
            res=a+res;
        }else{
            res=a+res;
        }
        num=parseInt(num/16);
    }
    if(num>=10){
        a=m.get(num);
        res=a+res;
    }else{
        res=num+res;
    }return res;
};