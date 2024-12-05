/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let currentSum = 0;
    let expectedSum = n*(n+1)/2;
    for(let i = 0;i<n;i++){
        currentSum += nums[i];
    }
    return expectedSum - currentSum;
};