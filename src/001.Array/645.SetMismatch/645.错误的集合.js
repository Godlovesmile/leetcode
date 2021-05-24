/*
 * @lc app=leetcode.cn id=645 lang=javascript
 *
 * [645] 错误的集合
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
	let rightNums = [];

	for (let i = 0; i < nums.length; i++) {
		const rightItem = i + 1;

		if (nums.includes(rightItem)) {
			const temp = nums.filter((j) => j === rightItem);
			if (temp.length > 1) {
				rightNums.unshift(rightItem);
			}
		} else {
			rightNums.push(rightItem);
		}
	}

	return rightNums;
};
// @lc code=end
