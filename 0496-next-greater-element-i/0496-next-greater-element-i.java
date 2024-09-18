class Solution {
    public int[] nextGreaterElement(int[] nums1, int[] nums2) {
        HashMap <Integer,Integer> nextMap = new HashMap<Integer,Integer>();
        Stack <Integer> s = new Stack<Integer>();
        int n = nums2.length;
        // s.push(nums2[n-1]);
        for(int i = n-1;i>= 0;i--){
            while(!s.isEmpty() && nums2[i]>= s.peek()){
                s.pop();
            }
            int nextGreater = s.isEmpty() ? -1 : s.peek();
            nextMap.put(nums2[i],nextGreater);
            s.push(nums2[i]);

        }
        int result [] = new int[nums1.length];
        for (int i = 0;i<nums1.length;i++){
            result[i] = nextMap.get(nums1[i]);
        }

        return result;


        
    }
}