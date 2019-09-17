/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
    if(n==1){
        return 0;
    }else if(n<6){
        return n;
    }
    let a=Math.sqrt(n),
    arr=[];
    for(let i=0;i<=n;i++){
        arr.push(i);
    }
    for(let i=6;i<=n;i++){
        for(let j=2;j<a+1;j++){
            if(i%j==0){
                arr[i]=Math.min(arr[i],arr[i/j]+arr[j])
            }
        }
    }return arr[n]
};
console.log(minSteps(9))