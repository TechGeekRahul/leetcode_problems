class Solution:
    def minWindow(self, s: str, t: str) -> str:
        left = 0
        right = 0
        minSize = float("inf")
        reqCount = len(t)
        start_i = 0
        freq = {}
        n = len(s)

        if reqCount > n:
            return ""

        for ch in t:
            freq[ord(ch)] = freq.get(ord(ch),0) + 1
        
        while right < n:
            if freq.get(ord(s[right]),0) > 0:
                reqCount-=1
            freq[ord(s[right])] = freq.get(ord(s[right]), 0) - 1

            while reqCount == 0:
                if minSize>right - left + 1:
                    minSize = right -left + 1
                    start_i = left
                freq[ord(s[left])] +=1
                
                if freq[ord(s[left])] > 0:
                    reqCount+=1
                left+=1
            right+=1
        return "" if minSize == float('inf') else s[start_i:start_i + minSize]

              
        