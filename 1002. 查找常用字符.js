/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    let arr = A[0].split('');
    let a;
    for(let i = 1,len=A.length; i < len; i++){
        let arr1 = A[i].split('');
        let arr2 = [];
        for(let j=0,len=arr1.length;j<len;j++){
            a=arr.indexOf(arr1[j]);
            if(a!=-1){
                arr2.push(arr1[j]);
                arr.splice(a,1)
            }
        }
        arr = arr2;
    }return arr
};