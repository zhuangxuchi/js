/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
    A=A.sort(function(a,b){return b-a});
    let a=[];
    for(let i=0,len=A.length;i<len;i++){
        a.push(A[i]);
        if(a.length==3){
            if(a[1]+a[2]>a[0]){
                return a[0]+a[1]+a[2]
            }else{
                a.shift()
            }
        };
    };
    return 0;
};