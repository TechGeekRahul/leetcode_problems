/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    function check(left,right){
        if(left>=right){
            return true;
        }
        if(s[left] !== s[right]){
            return false; 
        }
        return check(left + 1,right -1);
    }
    return check(0,s.length - 1);
};