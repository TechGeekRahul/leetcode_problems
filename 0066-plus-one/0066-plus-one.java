class Solution {
    public int[] plusOne(int[] digits) {
         int n = digits.length;
        
        // Iterate from the least significant digit
        for (int i = n - 1; i >= 0; i--) {
            // Increment the current digit by one
            digits[i]++;
            
            // If the result is less than 10, no carry needed, return digits
            if (digits[i] < 10) {
                return digits;
            }
            
            // If the result is 10, set the digit to 0 and continue to the next higher digit
            digits[i] = 0;
        }
        
        // If you reach this point, it means there's a carry at the most significant digit
        // Add an additional digit (1) at the beginning of the array
        int[] result = new int[n + 1];
        result[0] = 1;
        return result;
    }
}