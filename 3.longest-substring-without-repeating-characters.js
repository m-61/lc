const lengthOfLongestSubstring = function (s) {
  let res = 0
  let l = 0
  const charSet = new Set()

  for (let r = 0; r < s.length; r++) {
    while (charSet.has(s[r])) {
      charSet.delete(s[l])
      l += 1
    }
    charSet.add(s[r])
    res = Math.max(res, r - l + 1)
  }
  return res
}
