/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let length=triangle.length
    for(let i=1;i<length;i++){
        for(let j=0,len=triangle[i].length;j<len;j++){
            if(j==0){
                triangle[i][0]=triangle[i-1][0]+triangle[i][0];
            }else if(j==len-1){
                triangle[i][j]=triangle[i-1][j-1]+triangle[i][j];
            }else{
                triangle[i][j]=Math.min(triangle[i-1][j-1],triangle[i-1][j])+triangle[i][j];
            }
        }
    }return Math.min.apply(null,triangle[length-1])
};