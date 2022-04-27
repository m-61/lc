const groupAnagrams = function (strs) {
  const res = {}

  for (const str of strs) {
    const count = new Array(26).fill(0)
    for (const char of str) {
      count[char.charCodeAt() - 'a'.charCodeAt()]++
    }
    if (!res[count]) {
      res[count] = []
    }
    res[count].push(str)
  }
  return Object.values(res)
}
