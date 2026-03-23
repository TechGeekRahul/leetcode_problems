class Solution:
    def maxDepth(self, s: str) -> int:
        count = 0
        maxCount = count
        for char in s:
            if char == "(":
                count+=1
            maxCount = max(count,maxCount)
            if char == ")":
                count-=1
        return maxCount


        