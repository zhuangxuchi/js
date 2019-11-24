/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    products = products.sort(function (item1, item2) {
        return item1.localeCompare(item2)
    })
    let arr=[];
    let str="";
    let l=0,b=1;
    for(let i=0,s_len=searchWord.length;i<s_len;i++){
        arr.push([]);
        str+=searchWord[i];
        l++;
        for(let j=0,p_len=products.length;j<p_len;j++){
            for(let k=0;k<l;k++){
                if(b==1){
                    if(str[k]!==products[j][k]){
                        b=0;
                    }
                }else{
                    break;
                }
            }
            if(b==1){
                arr[i].push(products[j]);
            }
            b=1;
            if(arr[i].length==3){
                break;
            }
        }
    }return arr;
};