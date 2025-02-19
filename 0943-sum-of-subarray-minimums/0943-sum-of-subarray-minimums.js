/**
 * @param {number[]} arr
 * @return {number}
 */
// var sumSubarrayMins = function(arr) {
//     let NSL = getNSL(arr);
//     let NSR = getNSR(arr);

//     let sum =0;
//     let m = 1e9 + 7;

//     for(let i = 0;i<arr.length;i++){
//         let left = i - NSL[i];
//         let right = NSR[i] - i;
//         let totalWays = left*right;
//         let totalSum = totalWays*arr[i];
//         sum = (sum+totalSum)%m;
//     }
//     return sum;
// };

var sumSubarrayMins =  function (nums){
    let nsl = getNsl(nums);
    let nsr = getNsr(nums);
    let sum = 0;
    let m = 1e9 + 7;

    for(let i = 0;i<nums.length;i++){
        let left = i - nsl[i];
        let right = nsr[i] - i;
        let totalWays = left*right;
        let totalSum = totalWays*nums[i];
         sum = (sum+totalSum)%m;
    }
    return sum;
}
var getNsl = function(nums){
    let st = [];
    let res = [];
    let n = nums.length;
    for(let i = 0;i<n;i++){
        while(st.length !== 0 && nums[st[st.length - 1]]>=nums[i]){
            st.pop();
           
        }
         res[i] = st.length === 0 ? -1 : st[st.length - 1];
         st.push(i);

    }
    return res;

}

var getNsr = function(nums){
    let st = [];
    let res = [];
    let n = nums.length;
    for(let i = n-1;i>=0;i--){
        while(st.length !== 0 && nums[st[st.length - 1]]>nums[i]){
            st.pop();
           
        }
         res[i] = st.length === 0 ? n : st[st.length - 1];
         st.push(i);

    }
    return res;

}