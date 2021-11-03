/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
	if (!s) return t;
	let tArr = t.split('');

	for (let i = 0; i < s.length; i++) {
		const index = tArr.indexOf(s[i]);
		if (index == -1) return s[i];
		tArr.splice(index, 1);
	}
	return tArr[0];
};
// @lc code=end
