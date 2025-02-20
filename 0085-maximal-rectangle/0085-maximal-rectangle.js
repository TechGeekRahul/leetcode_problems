/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if(!matrix.length){
        return 0;
    }
     let n =  matrix.length;
    let m = matrix[0].length;
    let prefixSum = Array.from({ length: n }, () => Array(m).fill(0));
   
    let maxArea = 0;
    for(let j = 0;j<m;j++){
        let sum = 0;
        for(let i = 0;i<n;i++){

            sum+=1;
            if(matrix[i][j]==="0"){
                sum = 0; 
            }
            prefixSum[i][j] = sum
        }

    }

    for(let i = 0;i<n;i++){
        maxArea = Math.max(maxArea,largestRectangleArea(prefixSum[i]))
    }
    return maxArea;
};


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
    for(let i =0;i < heights.length;i++){
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
    for(let i = heights.length - 1;i>=0;i--){
        while(st.length!==0 && heights[st[st.length-1]]> heights[i]){
            st.pop();
        }
       res[i] = st.length === 0 ? heights.length:st[st.length - 1];
        st.push(i);
    } 
    return res;
}