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
        n = len(heights)
        finalArea = 0
        for i in range(n):
            width = nsr[i] - nsl[i] - 1
            area = heights[i]*width
            finalArea = max(area,finalArea)
        return finalArea



    def maximalRectangle(self, matrix: List[List[str]]) -> int:
        n = len(matrix)
        m = len(matrix[0])
        maxArea = 0
        prefixSum = [[0 for _ in range(m)] for _ in range(n)]
        for j in range(m):
            newSum = 0
            for i in range(n):
                newSum+=1
                if matrix[i][j] =="0":
                    newSum = 0
                
                prefixSum[i][j] = newSum
        
        for i in range(n):
            maxArea = max(maxArea,self.largestRectangleArea(prefixSum[i]))

        return maxArea

                


        