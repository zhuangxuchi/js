/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let a=0;
    for(let i=0;i<grid.length;i++){
        if(grid[i].indexOf(1)!=-1){
            a=1;
            break;
        }
    }
    if(a==0){
        return 0
    }
    let res=0;
    while(1){
        let j=0;
        let oranges=[];
        for(let i=0;i<grid.length;i++){
            for(let k=0;k<grid[i].length;k++){
                if(grid[i][k]==2){
                    oranges.push([i,k])
                }
            }
        }
        for(let i=0;i<oranges.length;i++){
            let x=oranges[i][0];
            let y=oranges[i][1];
            if(grid[x+1]!==undefined && grid[x+1][y]==1){
                grid[x+1][y]=2;
                j=1;
            }
            if(grid[x]!==undefined && grid[x][y+1]==1){
                grid[x][y+1]=2;
                j=1;
            }
            if(grid[x-1]!==undefined && grid[x-1][y]==1){
                grid[x-1][y]=2;
                j=1;
            }
            if(grid[x]!==undefined && grid[x][y-1]==1){
                grid[x][y-1]=2;
                j=1;
            }
        }
        if(j==1){
            res++;
        }else{
            break;
        }
    }
    for(let i=0;i<grid.length;i++){
        if(grid[i].indexOf(1)!=-1){
            return -1
        }
    }return res
};