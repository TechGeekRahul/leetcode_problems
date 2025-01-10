/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let count = 0;
    let res = "";
    for(let i = 0;i<s.length;i++){
        if(s[i] === "("){
            if(count > 0){
                res+=s[i];
            }
            count++;
        }else if(s[i] === ")"){
            count--;
            if(count > 0){
                res+=s[i];
            }
        }
    }
    return res;
};