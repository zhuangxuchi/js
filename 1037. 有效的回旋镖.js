/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
    let a=distance(points[0],points[1]);
    let b=distance(points[0],points[2]);
    let c=distance(points[1],points[2]);
    if(a+b>c&&a+c>b&&b+c>a){
        return true;
    }return false;
};
var distance =function(x,y){
    return ((x[0]-y[0])**2+(x[1]-y[1])**2)**0.5
}