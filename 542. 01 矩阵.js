/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
    let height=matrix.length,
    width=matrix[0].length;
    for(let i=0;i<height;i++){
        for(let j=0;j<width;j++){
            if(matrix[i][j]==1){
                matrix[i][j]=Infinity;
                if(i>0){
                    matrix[i][j]=Math.min(matrix[i-1][j]+1,matrix[i][j]);
                }
                if(j>0){
                    matrix[i][j]=Math.min(matrix[i][j-1]+1,matrix[i][j]);
                }
            }
        }
    }
    for(let i=height-1;i>-1;i--){
        for(let j=width-1;j>-1;j--){
            if(i+1<height){
                matrix[i][j]=Math.min(matrix[i+1][j]+1,matrix[i][j]);
            }
            if(j+1<width){
                matrix[i][j]=Math.min(matrix[i][j+1]+1,matrix[i][j]);
            }
        }
    }return matrix;
};