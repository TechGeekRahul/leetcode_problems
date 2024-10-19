class MyQueue {
    Stack<Integer> s1;
    Stack<Integer> s2;
    public MyQueue() {
        s1 = new Stack<>();
        s2 = new Stack<>();
    }
    
    public void push(int x) {
        if(!s1.isEmpty()){
            s1.push(x);
        }else{
            s2.push(x);
        }
    }
    
    public int pop() {
       if(!s1.empty()){
         while(s1.size() > 1){
            s2.push(s1.pop());
         }
         int y = s1.pop();
         while(!s2.isEmpty()){
            s1.push(s2.pop());
         }
         return y;
       }else{
         while(s2.size() > 1){
            s1.push(s2.pop());
         }
         int y = s2.pop();
          while(!s1.isEmpty()){
            s2.push(s1.pop());
         }
         return y;
       }
    }
    
    public int peek() {
        if(!s1.empty()){
         while(s1.size() > 1){
            s2.push(s1.pop());
         }
         int y = s1.pop();
         s2.push(y);
          while(!s2.isEmpty()){
            s1.push(s2.pop());
         }
         return y;
       }else{
         while(s2.size() > 1){
            s1.push(s2.pop());
         }
         int y = s2.pop();
         s1.push(y);
          while(!s1.isEmpty()){
            s2.push(s1.pop());
         }
         return y;
       } 
    }
    
    public boolean empty() {
         if(!s1.isEmpty() || !s2.isEmpty()){
            return false;
         }else{
            return true;
         }
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue obj = new MyQueue();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.peek();
 * boolean param_4 = obj.empty();
 */