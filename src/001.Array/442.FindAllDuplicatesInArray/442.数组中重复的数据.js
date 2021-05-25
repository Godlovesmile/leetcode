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
	let targets = new Array(nums.length).fill(0);
	let res = [];

	for (let i = 0; i < nums.length; i++) {
		const j = nums[i] - 1;

		if (!targets[j]) {
			targets[j] = 1;
			continue;
		}
		res.push(nums[i]);
	}

	return res;
};
// @lc code=end
