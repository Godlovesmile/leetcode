/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
	let lackNums = [];
	for (var i = 1; i <= nums.length; i++) {
		if (!nums.includes(i)) {
			lackNums.push(i);
		}
	}
	return lackNums;
};
// @lc code=end
