const topKFrequent = function (nums, k) {
  const count = {}
  for (const num of nums) {
    if (count[num]) {
      count[num]++
    } else {
      count[num] = 1
    }
  }

  const res = []
  const sortedThing = Object.entries(count).sort((a, b) => b[1] - a[1])
  for (let i = 0; i < k; i++) {
    res.push(sortedThing[i][0])
  }
  return res
}
