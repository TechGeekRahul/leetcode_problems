class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        mapping = {
            ")":"(",
            "}":"{",
            "]":"[",
        }
        for ch in s:
            if ch in mapping.values():
                stack.append(ch)
            else:
                if not stack:
                    return False
                top = stack.pop()
                if mapping[ch] != top:
                    return False
        return len(stack) == 0


        