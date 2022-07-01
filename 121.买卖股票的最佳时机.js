/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minPrice = prices[0]
  let maxValue = 0
  for (let i = 1; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i])
    maxValue = Math.max(prices[i] - minPrice, maxValue)
  }
  return maxValue
}
// @lc code=end
