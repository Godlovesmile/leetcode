/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
	const sArr = s.split(' ');
    const tempsArr = [];
	for (let i = 0; i < sArr.length; i++) {
        const item = sArr[i].split('').reverse().join('');
        tempsArr.push(item);
    }
    return tempsArr.join(' ');
};
// @lc code=end
