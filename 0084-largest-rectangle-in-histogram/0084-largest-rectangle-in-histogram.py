class Solution:

    def getNsl(self,heights):
        n = len(heights)
        stack = []
        res = [0]*n
        for i in range(n):
            while stack and heights[stack[-1]] >= heights[i]:
                stack.pop()
            res[i] = -1 if not stack else stack[-1]
            stack.append(i)
        return res

    def getNsr(self,heights):
        n = len(heights)
        stack = []
        res = [0]*n
        for i in range(n-1,-1,-1):
            while stack and heights[stack[-1]] > heights[i]:
                stack.pop()
            res[i] = n if not stack else stack[-1]
            stack.append(i)
        return res

    def largestRectangleArea(self, heights: List[int]) -> int:
        nsl = self.getNsl(heights)
        nsr = self.getNsr(heights)
        print("nsl",nsl)
        print("nsr",nsr)
        n = len(heights)
        finalArea = 0
        for i in range(n):
            width = nsr[i] - nsl[i] - 1
            area = heights[i]*width
            finalArea = max(area,finalArea)
        return finalArea


        