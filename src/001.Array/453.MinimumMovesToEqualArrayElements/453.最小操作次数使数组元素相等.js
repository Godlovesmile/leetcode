/*
 * @lc app=leetcode.cn id=453 lang=javascript
 *
 * [453] 最小操作次数使数组元素相等
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
	const sum = nums.reduce((pre, cur) => pre + cur);

	return sum - Math.min(...nums) * nums.length;
};
// @lc code=end
