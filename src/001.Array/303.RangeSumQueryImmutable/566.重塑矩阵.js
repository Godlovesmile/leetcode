/*
 * @lc app=leetcode.cn id=566 lang=javascript
 *
 * [566] 重塑矩阵
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
	const m = mat.length;
	if (!m) return mat;
	const n = mat[0].length;

	if (m * n != r * c) return mat;

	const arr = new Array(r).fill(0).map(() => new Array(c).fill(0));

	for (let i = 0; i < m * n; ++i) {
		arr[Math.floor(i / c)][i % c] = mat[Math.floor(i / n)][i % n];
	}

	return arr;
};
// @lc code=end
