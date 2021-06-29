/*
 * @lc app=leetcode.cn id=697 lang=javascript
 *
 * [697] 数组的度
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
	const numsObj = {};
	let maxLen = 0;
	let degree = nums.length;

	for (const i in nums) {
		numsObj[nums[i]] = [...(numsObj[nums[i]] || []), Number(i)];
	}

	for (const i in numsObj) {
		const indexs = numsObj[i];
		const tempLen = indexs[indexs.length - 1] - indexs[0] + 1;

		if (indexs.length > maxLen) {
			maxLen = indexs.length;
			degree = tempLen;
		} else if (indexs.length == maxLen && tempLen < degree) {
			maxLen = indexs.length;
			degree = tempLen;
		}
	}

	return degree;
};
// @lc code=end
