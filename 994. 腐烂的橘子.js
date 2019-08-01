/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let height=grid.length;
    let width=grid[0].length;
    let oranges=[];
    let dirs=[[1, 0], [-1, 0], [0, 1], [0, -1]];
    let good=0;
    for(let i=0;i<height;i++){
        for(let j=0;j<width;j++){
            if(grid[i][j]==2){
                oranges.push([i,j]);
            }else if(grid[i][j]==1){
                good++;
            }
        }
    }
    if(good==0){
        return 0;
    }
    let temp,x,y;
    let time=0;
    let que=[];
    while(oranges.length>0){
        temp=oranges.shift();
        for(let i=0;i<4;i++){
            x=temp[0];
            y=temp[1];
            x+=dirs[i][0];
            y+=dirs[i][1];
            if(x>=0 && x<height && y>=0 && y<width && grid[x][y]==1){
                que.push([x,y]);
                grid[x][y]=2;
                good--;
            }
        }
        if(oranges.length==0){
            oranges=que;
            que=[];
            time++;
        }
    }return good==0 ? time-1:-1
}