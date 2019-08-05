/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
    height=board.length;
    width=board[0].length;
    let xp=[-1,-1,-1,0,0,1,1,1];
    let yp=[-1,0,1,-1,1,-1,0,1];
    let a=click[0];
    let b=click[1];
    let x1,y1;
    let count=0;
    if(board[a][b]=='M'){
        board[a][b]='X';
        return board;
    }
    dfs(a,b);
    return board;
    function dfs(x,y){
        if(x<0 || y<0 || x>=height || y>=width){
            return;
        }
        for(let i=0;i<8;i++){
            x1=x+xp[i];
            y1=y+yp[i];
            if(x1<0 || y1<0 || x1>=height || y1>=width){
                continue;
            }else if(board[x1][y1]=='M'){
                count++;
                board[x][y]=`${count}`;
            }
        }
        count=0;
        if(board[x][y]=='E'){
            board[x][y]='B';
            dfs(x-1,y-1);
            dfs(x-1,y);
            dfs(x-1,y+1);
            dfs(x,y-1);
            dfs(x,y+1);
            dfs(x+1,y-1);
            dfs(x+1,y);
            dfs(x+1,y+1);
        }
    }
};