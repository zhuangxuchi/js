/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    let x;
    let y;
    let a=0;
    for(let i=0;i<8;i++){
        x=board[i].indexOf('R');
        if(x>=0){
            y=i;
            break;
        }
    }
    let left=x;
    let right=x;
    let up=y;
    let down=y;
    while(left>0){
        left--;
        if(board[y][left]=='p'){
            a+=1;
            break;
        }else if (board[y][left]== 'B') {
            break;
        }
    }
    while(right<7){
        right++;
        if(board[y][right]=='p'){
            a+=1;
            break;
        }else if (board[y][right]== 'B') {
            break;
        }
    }
    while(up<7){
        up++;
        if(board[up][x]=='p'){
            a+=1;
            break;
        }else if (board[up][x]== 'B') {
            break;
        }
    }
    while(down>0){
        down--;
        if(board[down][x]=='p'){
            a+=1;
            break;
        }else if (board[down][x]== 'B') {
            break;
        }
    }return a;
};
