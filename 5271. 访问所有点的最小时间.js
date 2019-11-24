/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    if(points.length==1){
        return 0;
    }
    let res=0;
    let x,y,l=0;
    for(let i=0;i<points.length-1;i++){
        x=Math.abs(points[i][0]-points[i+1][0]);
        y=Math.abs(points[i][1]-points[i+1][1]);
        l=Math.max(x,y);
        res=res+l;
    }
    return res;
};