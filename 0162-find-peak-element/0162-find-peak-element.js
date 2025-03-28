/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let low =0;
    let high = nums.length - 1;
    while(low<high){
        let mid = Math.floor((low + high)/2);
        if(nums[mid]<nums[mid+1]){
            low = mid + 1
        }else{
            high = mid;
        }
    }
    return low;
};