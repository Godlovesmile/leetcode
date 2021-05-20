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

	const columnLen = matrix[0].length;
	const rowLen = matrix.length;
	let nextMatrix = [];
	let count = 0;
	let l = 0,
		r = columnLen - 1,
		t = 0,
		b = rowLen - 1;

	while (count < flatMatrix.length) {
		// 从左到右
		for (let i = l; i < columnLen; i++) {
            console.log(matrix[t][i]);
			nextMatrix.push(matrix[t][i]);
			count++;
		}
		t++;
        console.log('-----');
		// 从上到下
		for (let i = t; i < rowLen; i++) {
            console.log(matrix[i][r]);
			nextMatrix.push(matrix[i][r]);
			count++;
		}
		r--;
        console.log('-----');
		// 从右到左
		for (let i = r; i >= l; i--) {
            console.log(matrix[b][i]);
			nextMatrix.push(matrix[b][i]);
			count++;
		}
		b--;
        console.log('-----');
		// 从下到上
		for (let i = b; i >= t; i--) {
            console.log(matrix[i][l]);
			nextMatrix.push(matrix[i][l]);
			count++;
		}
		l++;
	}
	console.log(nextMatrix);
	return nextMatrix;
};

spiralOrder([
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]);
// @lc code=end
