/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let height=grid.length;
    let width=grid[0].length;
    let que=[];
    let res=0;
    for(let i=0;i<height;i++){
        for(let j=0;j<width;j++){
            res=0;
            if(grid[i][j]==1){
                dfs(i,j);
                que.push(res);
            }
        }
    }
    let a=0;
    for(let i=0,len=que.length;i<len;i++){
        if(a<que[i]){
            a=que[i];
        }
    }return a;
    function dfs(x,y){
        if(x<0 || y<0 || x>height-1 || y>width-1 || grid[x][y]==0){
            return;
        }
        res++;
        grid[x][y]=0;
        dfs(x-1,y);
        dfs(x+1,y);
        dfs(x,y-1);
        dfs(x,y+1);
        return res;
    }
};