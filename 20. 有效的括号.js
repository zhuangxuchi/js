/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length%2==1){
        return false;
    }
    s=s.split('');
    let que=[];
    let temp;
    while(s.length>0){
        temp=s.shift();
        if(temp=='(' || temp=='[' || temp=='{'){
            que.push(temp);
        }else if(temp==')' && que[que.length-1]=='('){
            que.pop();
        }else if(temp==']' && que[que.length-1]=='['){
            que.pop();
        }else if(temp=='}' && que[que.length-1]=='{'){
            que.pop();
        }
    }
    if(que.length==0){
        return true;
    }else{
        return false;
    }
};