/**
 * @param {number[][]} A
 * @return {number}
 */
var numEnclaves = function(A) {
    let height=A.length;
    let width=A[0].length;
    let res=0;
    for(let i=0;i<width;i++){
        if(A[0][i]==1){
            dfs(0,i);
        }
    }
    for(let i=0;i<width;i++){
        if(A[height-1][i]==1){
            dfs(height-1,i);
        }
    }
    for(let i=1;i<height-1;i++){
        if(A[i][width-1]==1){
            dfs(i,width-1);
        }
    }
    for(let i=1;i<height-1;i++){
        if(A[i][0]==1){
            dfs(i,0);
        }
    }
    for(let i=1;i<height-1;i++){
        for(let j=1;j<width-1;j++){
            if(A[i][j]==1){
                res++;
            }
        }
    }return res;
    function dfs(x,y){
        if(x<0 || y<0 || x>height-1 || y>width-1 || A[x][y]==0){
            return;
        }
        A[x][y]=0;
        dfs(x-1,y);
        dfs(x+1,y);
        dfs(x,y-1);
        dfs(x,y+1);
    }
};
console.log(numEnclaves([[0,1,0,1],[1,0,0,0],[0,0,0,0],[1,0,0,1]]))