/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
    let left = 1;
    let right = Math.max(...nums);
    while(left<right){
        let mid = Math.floor((left + right)/2);
        if(smallest(nums,threshold,mid)){
            right = mid;
        }else{
            left = mid + 1;
        }
    }
    return left;
};

var smallest = function(nums,threshold,mid){
    let small = 0;
    for(let num of nums){
        small+=Math.ceil(num/mid)
    }
    return small<=threshold;
}