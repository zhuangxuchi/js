/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let r=0;
    let l=0;
    let u=0;
    let d=0;
    for(let i=0,len=moves.length;i<len;i++){
        if(moves[i]=='R'){
            r++;
        }else if(moves[i]=='L'){
            l++;
        }else if(moves[i]=='U'){
            u++;
        }else if(moves[i]=='D'){
            d++;
        }
    };
    if(r==l&&u==d){
        return true;
    }return false
};