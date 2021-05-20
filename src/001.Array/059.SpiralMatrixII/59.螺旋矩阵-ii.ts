/*
 * @lc app=leetcode.cn id=59 lang=typescript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
function generateMatrix(n: number): number[][] {
	const matrix: number[][] = new Array(n)
		.fill(0)
		.map(() => new Array(n).fill(0));
	let left: number = 0,
		right: number = n - 1,
		top: number = 0,
		bottom: number = n - 1,
		value: number = 1;

	while (value <= n * n) {
		// 从左到右
		for (let i = left; i <= right; i++) {
			matrix[top][i] = value++;
		}
		top++;

		// 从上到下
		for (let i = top; i <= bottom; i++) {
			matrix[i][right] = value++;
		}
		right--;

		// 从右到左
		for (let i = right; i >= left; i--) {
			matrix[bottom][i] = value++;
		}
		bottom--;

		// 从下到上
		for (let i = bottom; i >= top; i--) {
			matrix[i][left] = value++;
		}
		left++;
	}

	return matrix;
}
// @lc code=end
