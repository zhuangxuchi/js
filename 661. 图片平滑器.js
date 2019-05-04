/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
    let N=new Array();
    if(M.length==1&&M[0].length==1){return M};
    if(M.length==1&&M[0].length>1){
        N[0]=new Array();
        for(let x=0;x<M[0].length;x++){
            if(x==0){
                N[0][x]=Math.floor((M[0][x+1]+M[0][x])/2)
            }else if(x==M[0].length-1){
                N[0][x]=Math.floor((M[0][x-1]+M[0][x])/2)
            }else if(x!=0&&x!=M[0].length-1){
                N[0][x]=Math.floor((M[0][x-1]+M[0][x]+M[0][x+1])/3)
            }
        }
    }
    if(M[0].length==1&&M.length>1){
        for(let y=0;y<M.length;y++){
            N[y]=new Array();
            if(y==0){
                N[y][0]=Math.floor((M[y][0]+M[y+1][0])/2)
            }else if(y==M.length-1){
                N[y][0]=Math.floor((M[y][0]+M[y-1][0])/2)
            }else if(y!=0&&y!=M.length-1){
                N[y][0]=Math.floor((M[y][0]+M[y+1][0]+M[y-1][0])/3)
            }
        }
    }
    if(M.length>=2&&M[0].length>=2){
        for(let i=0;i<M.length;i++){
            N[i]=new Array();
            for(let j=0;j<M[0].length;j++){
                if(i==0&&j==0){
                    N[i][j]=Math.floor((M[i][j]+M[i][j+1]+M[i+1][j]+M[i+1][j+1])/4)
                }else if(i==M.length-1&&j==0){
                    N[i][j]=Math.floor((M[i][j]+M[i][j+1]+M[i-1][j]+M[i-1][j+1])/4)
                }else if(i==0&&j==M[0].length-1){
                    N[i][j]=Math.floor((M[i][j]+M[i][j-1]+M[i+1][j]+M[i+1][j-1])/4)
                }else if(i==M.length-1&&j==M[0].length-1){
                    N[i][j]=Math.floor((M[i][j]+M[i][j-1]+M[i-1][j]+M[i-1][j-1])/4)
                }else if(i==0&&j!=0&&j!=M[0].length-1){
                    N[i][j]=Math.floor((M[i][j]+M[i][j-1]+M[i][j+1]+M[i+1][j-1]+M[i+1][j]+M[i+1][j+1])/6)
                }else if(i==M.length-1&&j!=0&&j!=M[0].length-1){
                    N[i][j]=Math.floor((M[i][j]+M[i][j-1]+M[i][j+1]+M[i-1][j-1]+M[i-1][j]+M[i-1][j+1])/6)
                }else if(i!=0&&i!=M.length-1&&j==0){
                    N[i][j]=Math.floor((M[i][j]+M[i+1][j]+M[i-1][j]+M[i][j+1]+M[i+1][j+1]+M[i-1][j+1])/6)
                }else if(i!=0&&i!=M.length-1&&j==M[0].length-1){
                    N[i][j]=Math.floor((M[i][j]+M[i+1][j]+M[i-1][j]+M[i][j-1]+M[i+1][j-1]+M[i-1][j-1])/6)
                }else if(i!=0&&i!=M.length-1&&j!=0&&j!=M[0].length-1){
                    N[i][j]=Math.floor((M[i][j]+M[i][j-1]+M[i][j+1]+M[i-1][j]+M[i-1][j-1]+M[i-1][j+1]+M[i+1][j]+M[i+1][j-1]+M[i+1][j+1])/9)
                }
            }
        }
    }return N;
};