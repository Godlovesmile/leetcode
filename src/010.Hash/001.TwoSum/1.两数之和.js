/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let numsMap = {};

  for (let i = 0; i < nums.length; i++) {
    let other = target - nums[i];

    if (other in numsMap) {
      return [numsMap[other], i];
    } else {
      numsMap[nums[i]] = i;
    }
  }

  return [];
};
// @lc code=end

