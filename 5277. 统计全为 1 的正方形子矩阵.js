/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    let x=matrix.length;
    let y=matrix[0].length;
    let min=0;
    let res=0;
    let a=1;
    for(let i=0;i<x;i++){
        for(let j=0;j<y;j++){
            if(matrix[i][j]==1){
                res++;
                min=Math.min(x-i,y-j);
                while(min>1){
                    a=1;
                    for(var k=0;k<min;k++){
                        
                        if(matrix[i+k][j]!=1){
                            a=0;
                            break;
                        }
                        for(var l=0;l<min;l++){
                            if(matrix[i+k][j+l]!=1){
                                a=0;
                                break;
                            }
                        }
                        if(a==0){
                            
                            break;
                        }
                    }
                    if(a==1){
                        res++;
                    }
                    min--;
                }
            }
        }
    }return res;
};