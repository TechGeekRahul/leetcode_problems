class Solution:
    def longestPalindrome(self, s: str) -> str:
        n = len(s)
        dp = [[-1]*n for _ in range(n) ]
        def solve(s:str,i,j):
            if i>=j:
                return True
            if dp[i][j] !=-1:
                return dp[i][j]
            if s[i]==s[j]:
                dp[i][j] = solve(s,i+1,j-1)
            else:
                dp[i][j] = False
            return dp[i][j]
        
        maxLen = float("-inf")
        si = 0
        for i in range(n):
            for j in range(i,n):
                if solve(s,i,j):
                    if j-i+1 > maxLen:
                        maxLen = j - i + 1
                        si = i
        
        return s[si:si+maxLen]


        