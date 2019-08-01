/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    if(image[sr][sc]==newColor){
        return image;
    }
    let height=image.length;
    let width=image[0].length;
    let initColor=image[sr][sc];
    function dfs(x,y){
        image[x][y]=newColor;
        if(x>0 && image[x-1][y]==initColor){
            image[x-1][y]=newColor;
            dfs(x-1,y);
        }
        if(y>0 && image[x][y-1]==initColor){
            image[x][y-1]=newColor;
            dfs(x,y-1);
        }
        if(x<height-1 && image[x+1][y]==initColor){
            image[x+1][y]=newColor;
            dfs(x+1,y);
        }
        if(y<width-1 && image[x][y+1]==initColor){
            image[x][y+1]=newColor;
            dfs(x,y+1);
        }
    }
    dfs(sr,sc);
    return image;
};