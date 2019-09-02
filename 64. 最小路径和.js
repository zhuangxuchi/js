/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if(grid.length==0){
        return 0
    }
    let height=grid.length,
    width=grid[0].length;
    for(let i=1;i<width;i++){
        grid[0][i]+=grid[0][i-1];
    }
    for(let i=1;i<height;i++){
        grid[i][0]+=grid[i-1][0];
    }
    for(let i=1;i<height;i++){
        for(let j=1;j<width;j++){
            grid[i][j]+=Math.min(grid[i-1][j],grid[i][j-1]);
        }
    }return grid[height-1][width-1]
};