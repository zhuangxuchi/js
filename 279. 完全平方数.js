/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    if(n**0.5%1==0){
        return 1;
    }
    let arr=[];
    for(let i=0;i<=n;i++){
        arr.push(i);
    }
    for(let i=1;i<=n;i++){
        for(let j=1;i-j*j>=0;j++){
            arr[i]=Math.min(arr[i],arr[i-j*j]+1)
        }
    }
    return arr[n]
};