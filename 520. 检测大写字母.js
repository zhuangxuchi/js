/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if (word.length==0||word.length==1){return true;}
    else if (word[0]>='A'&&word[0]<='Z'){
        if (word[1]>='A'&&word[1]<='Z'){
            for (let i = 2;i<=word.length;i++){
                if (word[i]<'A'||word[i]>'Z'){return false;}
            }
        }
        else if (word[1]>='a'&&word[1]<='z'){
            for (let k = 2;k<=word.length;k++){
                if (word[k]<'a'||word[k]>'z'){return false}
            }
        }
    }
    else if (word[0]>='a'&&word[0]<='z'){
        for (let j = 1;j<=word.length;j++){
            if (word[j]<'a'||word[j]>'z'){return false;}
        }
    }return true;
};
