/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
    let res=0;
    let a=0;
    for(let i=0,x_len=grid.length;i<x_len;i++){
        for(let j=0,y_len=grid[0].length;j<y_len;j++){
            if(grid[i][j]==1){
                for(let k=0;k<y_len;k++){
                    if(k!=j && grid[i][k]==1){
                        res++;
                        a=1;
                        break;
                    }
                }
                if(a==0){
                    for(let k=0;k<x_len;k++){
                        if(k!=i && grid[k][j]==1){
                            res++;
                            break;
                        }
                    }
                }
                a=0;
            }
        }
    }return res;
};