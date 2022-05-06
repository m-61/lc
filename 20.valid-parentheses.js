const isValid = function (s) {
  const stack = []
  const map = { '}': '{', ')': '(', ']': '[' }

  for (const c of s) {
    if (map[c]) {
      if (stack.length && stack[stack.length - 1] == map[c]) {
        stack.pop()
      } else {
        return false
      }
    } else {
      stack.push(c)
    }
  }
  return !stack.length
}
