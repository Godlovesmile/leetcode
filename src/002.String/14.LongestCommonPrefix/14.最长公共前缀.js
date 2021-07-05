/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	if (!strs || !strs.length) return '';

	for (let i = 0; i < strs[0].length; i++) {
		for (let j = 0; j < strs.length; j++) {
			if (i == strs[j].length || strs[0][i] != strs[j][i]) {
				return strs[0].substring(0, i);
			}
		}
	}

	return strs[0];
};
// @lc code=end
