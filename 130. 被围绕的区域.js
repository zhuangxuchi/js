/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    let height=board.length;
    if(height==0){
        return [];
    }
    let width=board[0].length;
    for(let i=0;i<height;i++){
        dfs(i,0);
    }
    for(let i=1;i<width;i++){
        dfs(0,i);
        dfs(height-1,i)
    }
    for(let i=1;i<height;i++){
        dfs(i,width-1);
    }
    function dfs(x,y){
        if(board[x][y]=='O'){
            board[x][y]=1;
            if(x>0){
                dfs(x-1,y);
            }
            if(y>0){
                dfs(x,y-1);
            }
            if(x+1<height){
                dfs(x+1,y);
            }
            if(y+1<width){
                dfs(x,y+1);
            }
        }
    }
    for(let i=1;i<height-1;i++){
        for(let j=1;j<width-1;j++){
            if(board[i][j]=='O'){
                board[i][j]='X';
            }
        }
    }
    for(let i=0;i<height;i++){
        for(let j=0;j<width;j++){
            if(board[i][j]=='1'){
                board[i][j]='O';
            }
        }
    }
    return board;
};