/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = nums[0];
  let sum = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    if (sum + nums[i] < nums[i]) {
      sum = nums[i];

      if (max < sum) {
        max = sum;
      }

      continue;
    }

    sum = sum + nums[i];

    if (max < sum) {
      max = sum;
    }
  }
  
  return max;
};
// @lc code=end

