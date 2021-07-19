/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
	let preRow = [1];
	if (rowIndex == 0) return preRow;

	for (let i = 1; i <= rowIndex; i++) {
		let currentRow = new Array(i + 1).fill(0);
		currentRow[0] = 1;
		currentRow[i] = 1;

		for (let j = 1; j < i; j++) {
			currentRow[j] = preRow[j - 1] + preRow[j];
		}
		preRow = currentRow;
		if (i == rowIndex) {
			return preRow;
		}
	}
};
// console.log(getRow(1));
// @lc code=end
