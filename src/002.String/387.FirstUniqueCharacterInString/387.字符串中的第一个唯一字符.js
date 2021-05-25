/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
	let index = -1;
	let repeats = [];

	for (let i = 0; i < s.length; i++) {
		if (repeats.includes(s[i])) continue;

		if (i === s.lastIndexOf(s[i])) {
			index = i;
			break;
		} else {
			repeats.push(s[i]);
		}
	}

	return index;
};
// @lc code=end
