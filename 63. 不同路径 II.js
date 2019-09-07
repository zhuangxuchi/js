/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let height=obstacleGrid.length,
    width=obstacleGrid[0].length;
    if(obstacleGrid[0][0]==1){
        return 0;
    }else{
        obstacleGrid[0][0]=1;
    }
    for(let i=1;i<height;i++){
        if(obstacleGrid[i][0]==1){
            obstacleGrid[i][0]=0;
        }else{
            obstacleGrid[i][0]=obstacleGrid[i-1][0];
        }
    }
    for(let i=1;i<width;i++){
        if(obstacleGrid[0][i]==1){
            obstacleGrid[0][i]=0;
        }else{
            obstacleGrid[0][i]=obstacleGrid[0][i-1];
        }
    }
    for(let i=1;i<height;i++){
        for(let j=1;j<width;j++){
            if(obstacleGrid[i][j]==1){
                obstacleGrid[i][j]=0;
            }else{
                obstacleGrid[i][j]=obstacleGrid[i-1][j]+obstacleGrid[i][j-1];
            }
        }
    }return obstacleGrid[height-1][width-1];
};