/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    let res=0;
    let p;
    let a;
    let b;
    let c;
    let len=points.length;
    for(let i=0;i<len-2;i++){
        for(let j=i+1;j<len-1;j++){
            for(let k=j+1;k<len;k++){
                a=distance(points[i],points[j]);
                b=distance(points[i],points[k]);
                c=distance(points[j],points[k]);
                p=(a+b+c)/2;
                res=Math.max(res,p*(p-a)*(p-b)*(p-c))
            }
        }
    }return res**0.5;
};
var distance =function(x,y){
    return ((x[0]-y[0])**2+(x[1]-y[1])**2)**0.5;
};