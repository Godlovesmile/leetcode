/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
	/*
	let wordsArr = [];
	let tempWord = '';

	for (let i = 0; i < s.length; i++) {
		if (s[i] == ' ') {
			if (tempWord) {
				wordsArr.push(tempWord);
			}
			tempWord = '';
			continue;
		} else {
			tempWord += s[i];
		}
		if (i == s.length - 1 && tempWord) {
			wordsArr.push(tempWord);
		}
	}
    return wordsArr.reverse().join(' ');
    */
	return s.trim().split(/\s+/).reverse().join(' ');
};
// @lc code=end
