/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let que=[];
    let res=0;
    let len;
    for(let i=0,leng=ops.length;i<leng;i++){
        if(ops[i]=='C'){
            que.pop();
        }else if(ops[i]=='D'){
            len=que.length;
            que.push(que[len-1]*2);
        }else if(ops[i]=='+'){
            len=que.length;
            que.push(que[len-1]+que[len-2])
        }else{
            que.push(ops[i]*1);
        }
    }
    for(let i=0,leng=que.length;i<leng;i++){
        res+=que[i];
    }return res;
};