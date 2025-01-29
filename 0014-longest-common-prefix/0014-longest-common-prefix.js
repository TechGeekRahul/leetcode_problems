/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs === ""){
        return "";
    }
    let res ="";
    strs.sort();
    for(let i = 0;i<strs[0].length;i++){
        if(strs[0][i] === strs[strs.length - 1][i] ){
            res+=strs[0][i];
        }else{
            break;
        }
        
    }
    return res;
};