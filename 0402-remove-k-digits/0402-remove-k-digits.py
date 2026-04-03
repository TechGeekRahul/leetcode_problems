class Solution:
    def removeKdigits(self, num: str, k: int) -> str:

        n = len(num)
        if n == k:
            return "0"
        stack = []
        for numi in num:
            while stack and stack[-1] > numi and k:
                stack.pop()
                k-=1
            stack.append(numi)
        if k:
            stack = stack[:len(stack)-k]
        
        result = ("").join(stack).lstrip("0")
        return result if result else "0"
        


        