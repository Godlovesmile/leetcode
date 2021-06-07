/*
 * @lc app=leetcode.cn id=628 lang=javascript
 *
 * [628] 三个数的最大乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
	const sortNums = nums.sort((a, b) => a - b);
	const n = nums.length;

	return Math.max(
		sortNums[n - 1] * nums[n - 2] * nums[n - 3],
		sortNums[0] * sortNums[1] * sortNums[n - 1]
	);
};
// @lc code=end
