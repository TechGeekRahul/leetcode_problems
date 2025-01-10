/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = s.trim().split(/\s+/);
    let res = "";
    for(let i = words.length - 1;i>=0;i--){
        res+=words[i];
        if(i!==0){
            res+=" ";
        }
    }
    return res;
};