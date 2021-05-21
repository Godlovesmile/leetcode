/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
	const flatMatrix = matrix.flat(Infinity);

	if (!flatMatrix.length) return [];

	let nextMatrix = [];
	let count = 0;
	let l = 0,
		r = matrix[0].length - 1,
		t = 0,
		b = matrix.length - 1;

	while (count < flatMatrix.length && l <= r) {
		// 从左到右
		for (let i = l; i <= r; i++) {
			nextMatrix.push(matrix[t][i]);
			count++;
		}
		t++;

		// 从上到下
		for (let i = t; i <= b; i++) {
			nextMatrix.push(matrix[i][r]);
			count++;
		}
		r--;

		// 从右到左
		if (l <= r && t <= b) {
			for (let i = r; i >= l; i--) {
				nextMatrix.push(matrix[b][i]);
				count++;
			}
			b--;

			// 从下到上
			for (let i = b; i >= t; i--) {
				nextMatrix.push(matrix[i][l]);
				count++;
			}
			l++;
		}
	}

	return nextMatrix;
};
// @lc code=end
