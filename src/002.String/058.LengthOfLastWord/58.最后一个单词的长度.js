/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
	const trimStr = s.trim();
	let lastLen = 0;

	for (let i = trimStr.length - 1; i >= 0; i--) {
		if (trimStr[i] == ' ') {
			break;
		}
		lastLen++;
	}

	return lastLen;
};
// @lc code=end
