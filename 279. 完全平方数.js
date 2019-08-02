/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    if(n**0.5%1==0){
        return 1;
    }
    let que=[n];
    let q=[];
    let temp;
    let a;
    let res=0;
    while(que.length>0){
        temp=que.shift();
        for(let i=1,j=parseInt(temp**0.5);i<=j;i++){
            a=temp-i**2;
            if(a==0){
                return res+1;
            }else if(que.indexOf(a)==-1 && q.indexOf(a)==-1){
                q.push(a);
            }
        }
        if(que.length==0){
            for(let i=0,len=q.length;i<len;i++){
                que.push(q[i]);
            }
            res++;
        }
    }
};