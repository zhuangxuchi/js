/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    let height=image.length;
    let width=image[0].length;
    let dirs=[[1, 0], [-1, 0], [0, 1], [0, -1]];
    let initial=image[sr][sc];
    image[sr][sc]=newColor;
    let res=[[sr,sc]];
    let temp;
    let img=[];
    for(let i=0;i<image.length;i++){
        img.push([]);
    }
    while(res.length>0){
        temp=res.pop();
        for(let i=0;i<4;i++){
            x=temp[0];
            y=temp[1];
            x+=dirs[i][0];
            y+=dirs[i][1];
            if(x>=0 && x<height && y>=0 && y<width && image[x][y]==initial && img[x][y]!==-1){
                res.push([x,y]);
                image[x][y]=newColor;
                img[x][y]=-1;
            }
        }
    }return image;
};
console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]],1,1,2))