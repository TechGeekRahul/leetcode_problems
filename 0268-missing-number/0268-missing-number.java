class Solution {
    public int missingNumber(int[] nums) {
        int currentSum = 0;
        int n = nums.length;
        int expectedSum = n*(n + 1)/2;
        for(int i = 0;i<n;i++){
            currentSum+=nums[i];
        }
        return expectedSum - currentSum;

    }
}