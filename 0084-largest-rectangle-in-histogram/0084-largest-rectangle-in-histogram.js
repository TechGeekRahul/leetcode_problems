/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let nsl = getNsl(heights);
    let nsr = getNsr(heights);
    let finalArea = 0;
    for(let i = 0;i<heights.length;i++){
        let width = nsr[i]-nsl[i] -1;
        let newArea = heights[i]*width;
        finalArea = Math.max(finalArea,newArea);
    }
    return finalArea;
    
};

var getNsl = function(heights){
    let st = [];
    let res = [];
    for(let i =0;i<heights.length;i++){
        while(st.length!==0 && heights[st[st.length-1]]>= heights[i]){
            st.pop();
        }
        res[i] = st.length === 0 ? -1:st[st.length - 1];
        st.push(i);
    } 
    return res;
}

var getNsr = function(heights){
    let st = [];
    let res = [];
    for(let i = heights.length;i>=0;i--){
        while(st.length!==0 && heights[st[st.length-1]]> heights[i]){
            st.pop();
        }
       res[i] = st.length === 0 ? heights.length:st[st.length - 1];
        st.push(i);
    } 
    return res;
}