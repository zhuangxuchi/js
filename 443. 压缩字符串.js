/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let zf=chars[0];
    let cs=0;
    let index=0;
    for(let i=0;i<chars.length;i++){
        if(chars[i]===zf){
            cs++;
        }else{
            chars[index++]=zf;
            if(cs>1){ 
                for(let j=0;j<cs.toString().length;j++){
                    chars[index++]=cs.toString()[j]
                }
            }
            zf=chars[i];
            cs=1;
        }
    }
    chars[index++]=zf;
    if(cs>1){ 
        for(let j=0;j<cs.toString().length;j++){
            chars[index++]=cs.toString()[j]
        }
    }
    return index;
};