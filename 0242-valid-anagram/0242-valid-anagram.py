class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        charMap = [0]*256
        for i in range(len(s)):
            charMap[ord(s[i])]+=1
            charMap[ord(t[i])]-=1
        for num in charMap:
            if num > 0:
                return False
        return True




        