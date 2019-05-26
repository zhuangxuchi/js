/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    let arr=[];
    let x=1440;
    for(let i=0;i<timePoints.length;i++){
        timePoints[i]=timePoints[i].split(':')
        arr[i]=(parseInt(timePoints[i][0]))*60+parseInt(timePoints[i][1])
    }
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            a=arr[i]-arr[j];
            if(a<0){a=-a};
            if(a>720){a=1440-a;}
            if(a<x){x=a};
        }
    }
    return x;
};