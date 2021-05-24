/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
	nums = nums.filter((n, i) => {
		return nums.lastIndexOf(n) > i && nums.lastIndexOf(n) > 0;
	});
	return nums.sort((a, b) => a - b);
};
// @lc code=end
