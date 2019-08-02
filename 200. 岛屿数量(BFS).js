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
    let dirs=[[1, 0], [-1, 0], [0, 1], [0, -1]];
    let temp;
    let x;
    let y;
    let res=0;
    let que=[];
    for(let i=0;i<height;i++){
        for(let j=0;j<width;j++){
            if(grid[i][j]=='1' && grid[i][j]!==true){
                res++;
                grid[i][j]==true;
                que.push([i,j]);
                while(que.length>0){
                    temp=que.shift();
                    for(let k=0;k<4;k++){
                        x=temp[0];
                        y=temp[1];
                        x+=dirs[k][0];
                        y+=dirs[k][1];
                        if(x>=0 && y>=0 && x<height && y<width && grid[x][y]=='1' && grid[x][y]!==true){
                            grid[x][y]=true;
                            que.push([x,y]);
                        }
                    }
                }
            }
        }
    }return res;
};