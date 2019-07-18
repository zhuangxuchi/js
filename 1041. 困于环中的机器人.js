/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    let d=0;
    let x=0;
    let y=0;
    for(let j=0;j<4;j++){
        for(let i=0,len=instructions.length;i<len;i++){
            if(instructions[i]=='R'){
                d++
            }else if(instructions[i]=='L'){
                d--
            }else{
                if(d%4==0 || d%4==-0){
                    y++;
                }else if(d%4==1 || d%4==-3){
                    x++;
                }else if(d%4==2 || d%4==-2){
                    y--;
                }else{
                    x--;
                }
            }
        }
        if(x==0 && y==0){
            return true;
        }
    }return false;
};