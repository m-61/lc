const isAnagram = function (s, t) {
  const map = {}
  if (s.length !== t.length) {
    return false
  } else {
    for (let i = 0; i < s.length; i++) {
      if (map[s[i]]) {
        map[s[i]]++
      } else {
        map[s[i]] = 1
      }
    }
    for (let j = 0; j < t.length; j++) {
      if (map[t[j]]) {
        map[t[j]]--
      } else {
        return false
      }
    }
  }
  return true
}
