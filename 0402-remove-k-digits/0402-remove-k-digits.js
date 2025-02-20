/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  let st = [];
  for(let i = 0;i<num.length;i++){
    while(st.length > 0 && st[st.length - 1] > num[i] && k > 0){
        st.pop();
        k--;
    }
    st.push(num[i]);
  }
  while(k>0 && st.length > 0){
    st.pop();
    k--;
  }
  let res = st.join("");
  res = res.replace(/^0+/,"");
  return res.length === 0?"0":res;
    
};