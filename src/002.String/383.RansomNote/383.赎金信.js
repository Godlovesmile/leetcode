/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
	let magazineArr = magazine.split('');

	for (let i of ransomNote) {
		const index = magazineArr.indexOf(i);
		if (index == -1) return false;
		magazineArr.splice(index, 1);
	}

	return magazine.length - magazineArr.length == ransomNote.length;
};
// @lc code=end
