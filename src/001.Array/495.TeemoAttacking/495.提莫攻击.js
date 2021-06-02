/*
 * @lc app=leetcode.cn id=495 lang=javascript
 *
 * [495] 提莫攻击
 */

// @lc code=start
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
	let count = 0;
	let pre = -(timeSeries[0] + duration);

	for (let i of timeSeries) {
		const overlap = duration - (i - pre) < 0 ? 0 : duration - (i - pre);

		count = count + duration - overlap;
		pre = i;
	}

	return count;
};
// @lc code=end
