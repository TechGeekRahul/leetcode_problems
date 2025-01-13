/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  let st = [];
  for(let i = 0;i<asteroids.length;i++){
    let curr = asteroids[i];
    let last = st[st.length - 1];
    if(!st.length || curr > 0 || last <0 ){
        st.push(curr);
    }else if(-curr === last){
        st.pop();
    }else if(-curr > last){
        st.pop();
        i--;
    }
  }
    
   
    return st;
};