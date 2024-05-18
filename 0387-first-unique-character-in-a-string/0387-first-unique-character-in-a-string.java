class Solution {
    public int firstUniqChar(String s) {
       int [] f1 = new int [256];
        Arrays.fill(f1,-1);
        for(int i = 0;i<s.length();i++){
            if(f1[s.charAt(i)] == -1){
              f1[s.charAt(i)] = i;  
            }else{
                f1[s.charAt(i)] = -2;  
            }
        }
        int res = Integer.MAX_VALUE;
        for(int i = 0;i<256;i++){
            if(f1[i]>=0)
            res = Math.min(res,f1[i]);
        }
        
        if(res == Integer.MAX_VALUE){
            return -1;
        }else{
            return res;
        }
    }
}