const maxProfit = function (prices) {
  let maxProfit = 0
  let l = 0
  for (let r = 1; r < prices.length; r++) {
    if (prices[r] < prices[l]) {
      l = r
    }
    maxProfit = Math.max(maxProfit, prices[r] - prices[l])
  }
  return maxProfit
}
