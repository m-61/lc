const containsDuplicate = function (nums) {
  const numsMap = {}
  for (const num of nums) {
    if (numsMap[num]) {
      return true
    } else {
      numsMap[num] = 1
    }
  }
  return false
}
