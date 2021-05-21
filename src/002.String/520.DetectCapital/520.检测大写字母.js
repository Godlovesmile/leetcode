/*
 * @lc app=leetcode.cn id=520 lang=javascript
 *
 * [520] 检测大写字母
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
	const upperWords = word.split('').filter((i) => /[A-Z]/g.test(i));
	const condition1 = upperWords.length === word.length;
	const condition2 = upperWords.length === 0;
	const condition3 = upperWords.length === 1 && upperWords[0] === word[0];

	return condition1 || condition2 || condition3;
};

// @lc code=end
