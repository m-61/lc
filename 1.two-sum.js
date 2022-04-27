const twoSum = function (nums, target) {
  const map = nums.reduce((map, v, k) => { map[v] = k; return map }, {})
  for (let i = 0; i < nums.length; i++) {
    const tmp = target - nums[i]
    if (map[tmp] && map[tmp] !== i) {
      return [i, map[tmp]]
    }
  }
}
