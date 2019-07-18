/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    let f=0;
    let l=0;
    let m=0;
    let n=0;
    let len=seats.length;
    for(let i=0;i<len;i++){
        if(seats[i]==0){
            f++;
        }else{
            break;
        }
    }
    for(let i=len-1;i>-1;i--){
        if(seats[i]==0){
            l++;
        }else{
            break;
        }
    }
    for(let i=1;i<len-1;i++){
        if(seats[i]==0){
            n++;
        }else{
            m=Math.max(m,n);
            n=0;
        }
        m=Math.max(m,n);
    }return parseInt(Math.max(f,l,(m+1)/2));
};