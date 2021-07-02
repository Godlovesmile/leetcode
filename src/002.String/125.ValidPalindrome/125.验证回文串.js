/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
	let preStr = '',
		nextStr = '';
    s = s.toLowerCase();
	for (const i of s) {
		if (/^[0-9a-zA-Z]+$/i.test(i)) {
			preStr += i;
			nextStr = (i + '') + nextStr;
		}
	}
	return preStr === nextStr;
};
// @lc code=end
