/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
	const filterNums = Array.from(new Set(nums)).sort((a, b) => b - a);

	if (filterNums.length >= 3) {
		return filterNums[2];
	}

	return filterNums[0];
};
// console.log(thirdMax([2, 1]));
// @lc code=end
