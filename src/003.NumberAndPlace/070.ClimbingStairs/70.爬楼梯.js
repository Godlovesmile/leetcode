/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 动态规划思想
// 1 2 3 5 8
// f(x) = f(x-1) + f(x-2)
var climbStairs = function(n) {
  let dep = []

  dep[0] = 1
  dep[1] = 2

  for (let i = 2; i <= n - 1; i++) {
    dep[i] = dep[i-1] + dep[i-2]
  }

  return dep[n-1]
};
// @lc code=end

