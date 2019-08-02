/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(grid.length==0||grid[0].length==0){
        return 0
    }
    height=grid.length;
    width=grid[0].length;
    let res=0;
    for(let i=0;i<height;i++){
        for(let j=0;j<width;j++){
            if(grid[i][j]=='1'){
                dfs(i,j);
                res++;
            }
        }
    }return res;
    function dfs(x,y){
        if(x<0 || y<0 || x>=height || y>=width || grid[x][y]=='0'){
            return;
        }
        grid[x][y]='0';
        dfs(x-1,y);
        dfs(x+1,y);
        dfs(x,y-1);
        dfs(x,y+1);
    }
}