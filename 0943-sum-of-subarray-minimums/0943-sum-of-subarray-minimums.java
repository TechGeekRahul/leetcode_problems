class Solution {
    public int sumSubarrayMins(int[] arr) {
        int n = arr.length;
        ArrayList <Integer> NSL = getNsl(arr,n);
        ArrayList <Integer> RSL = getRsl(arr,n);
        long sum = 0;
        int M = 1000000007;
        for(int i = 0;i<n;i++){
            long ls = NSL.get(i);
            long rs = RSL.get(i);
            long totalWays = ls*rs;
            long totalSum = totalWays*arr[i];
            sum = (sum + totalSum)%M;
        }
        return (int) sum;
    }

    public ArrayList <Integer> getNsl(int [] arr,int n){
    Stack <Integer> s = new Stack<>();
    ArrayList <Integer> result = new ArrayList <>();
    for(int i = 0;i<n;i++){
        while(s.size() != 0 && arr[i] <= arr[s.peek()]){
            s.pop();
        }
        int nsl = s.isEmpty() ? i + 1 : i - s.peek();
        s.push(i);
        result.add(nsl);
    }
    return result;

    }

    public ArrayList <Integer> getRsl(int [] arr,int n){
    Stack <Integer> s = new Stack<>();
    ArrayList <Integer> result = new ArrayList <>();
    for(int i = n-1;i>=0;i--){
        while(s.size() != 0 && arr[i] < arr[s.peek()]){
            s.pop();
        }
         int rsl = s.isEmpty() ? n - i : s.peek() - i;
        s.push(i);
        result.add(rsl);
    }
     Collections.reverse(result);
        return result;

    }
}