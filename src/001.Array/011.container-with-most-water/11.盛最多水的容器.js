/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
/*
  s = min(h[i], h[j]) * (j - 1)

  关键点: 每次移动较小指针端
*/
var maxArea = function(height) {
  let i = 0, j = height.length - 1, maxs = 0

  while (i <= j) {
    let s = Math.min(height[i], height[j]) * (j - i)
    maxs = Math.max(s, maxs)

    if (height[i] < height[j]) {
      i++
    } else {
      j--
    }
  }

  return maxs
};
// @lc code=end

