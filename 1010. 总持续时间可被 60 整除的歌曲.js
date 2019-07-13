/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    let a=[];
    let b=0;
    for(let i=0;i<60;i++){
        a[i]=0;
    };
    for(let i=0,len=time.length;i<len;i++){
        a[time[i]%60]++;
    };
    for(let i=1;i<30;i++){
            b+=a[i]*a[60-i];
    };
    b+=a[0]*(a[0]-1)/2;
    b+=a[30]*(a[30]-1)/2;
    return b;
};