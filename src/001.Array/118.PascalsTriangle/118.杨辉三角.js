/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
	let generateArrs = [];

	for (let i = 0; i < numRows; i++) {
		let generateItem = new Array(i + 1).fill(0);
		generateItem[0] = 1;
		generateItem[i] = 1;

		for (let j = 1; j < i; j++) {
			if (!generateItem[j]) {
				generateItem[j] =
					generateArrs[i - 1][j] + generateArrs[i - 1][j - 1];
			}
		}
		generateArrs.push(generateItem);
	}

	return generateArrs;
};
// @lc code=end
