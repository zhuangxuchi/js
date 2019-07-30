/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let a=[];
    let b=10000;
    let c;
    let m = new Map();
    for(let i=0,len1=list1.length,len2=list2.length;i<len1||i<len2;i++){
        if(list1[i]!==undefined){
            if(m.has(list1[i])){
                c=m.get(list1[i])+i;
                if(c<b){
                    a=[];
                    a.push(list1[i]);
                    b=m.get(list1[i])+i;
                }else if(b==c){
                    a.push(list1[i]);
                }
            }else{
                m.set(list1[i],i);
            }
        }
        if(list2[i]!==undefined){
            if(m.has(list2[i])){
                c=m.get(list2[i])+i;
                if(c<b){
                    a=[];
                    a.push(list2[i]);
                    b=m.get(list2[i])+i;
                }else if(b==c){
                    a.push(list2[i]);
                }
            }else{
                m.set(list2[i],i);
            }
        }
    }return a;
};