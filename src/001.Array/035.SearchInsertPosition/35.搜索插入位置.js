/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) return i;

    if (nums[i] < target) {
      index = i + 1;
    }
  }

  return index;
};
// @lc code=end

