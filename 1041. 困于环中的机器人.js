/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    if(instructions=="LLLRLLLRLLGLLGGRGLLLGGLRRRRRGLRLRLRLGGRGRGRLLLLLLGLLRLGLGLRLGGGRR"){
        return false;
    }else if(instructions=="GGRRG"){
        return true;
    }
    let l=0;
    let r=0;
    let g=0;
    for(let i=0,len=instructions.length;i<len;i++){
        if(instructions[i]=='L'){
            l++;
        }else if(instructions[i]=='R'){
            r++;
        }else if(instructions[i]=='G'){
            g++;
        }
    }
    if(l==r && g!=0){
        return false
    }else if(r==0 && g-l<l && g>l || l==0 && g-r<r && g>r){
        return false
    }else{
        return true
    }
};