class Solution {
    public int[] nextGreaterElements(int[] nums) {
        int n = nums.length;
      int [] nge = new int [n];
      Stack <Integer> s = new Stack<>();
       Arrays.fill(nge, -1);
      
      for(int i = n*2 - 1;i>=0;i--){
        while(!s.isEmpty() && s.peek() <= nums[i%n]){
            s.pop();
           
        }

         if(i<n){
            nge[i] = s.isEmpty() ? -1 : s.peek();
            }
            
           s.push(nums[i%n]);
      }
    //  reverseArray(nge);
      return nge;
    }
   
}