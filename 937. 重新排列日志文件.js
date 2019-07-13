/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    let a=[];
    let b=[];
    for(let i=0;i<logs.length;i++){
        logs[i]=logs[i].split(' ');
        if(isNaN(logs[i][1])){
            logs[i].push(logs[i].shift(logs[i]));
            a.push(logs[i]);
        }else{
            b.push(logs[i]);
        }
    };
    a=a.sort();
    for(let i=0;i<a.length;i++){
        a[i].unshift(a[i].pop(a[i]));
        a[i]=a[i].join(' ');
    };
    for(let i=0;i<b.length;i++){
        b[i]=b[i].join(' ');
        a.push(b[i]);
    };
    return a;
};
console.log(reorderLogFiles(["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]))