/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
	if (s.length != t.length) return false;

	const countMap = {};

	for (let i = 0; i < s.length; i++) {
		if (typeof countMap[s[i]] == 'number') {
			countMap[s[i]] += 1;
		} else {
			countMap[s[i]] = 1;
		}
	}

	for (let i = 0; i < t.length; i++) {
		if (typeof countMap[t[i]] == 'number') {
			countMap[t[i]] -= 1;
		} else {
			return false;
		}

		if (countMap[t[i]] < 0) return false;
	}

	return true;
};
// @lc code=end
