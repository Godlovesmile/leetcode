/*
 * @lc app=leetcode.cn id=498 lang=javascript
 *
 * [498] 对角线遍历
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
	if (!mat.length) return [];

	const rowLen = mat.length;
	const columnLen = mat[0].length;
	// 需要对折的次数(即对折线的条数)
	const count = rowLen + columnLen - 1;
	// 坐标位置标记
	let m = 0,
		n = 0,
		resArrIndex = 0,
		resArr = [];

	for (let i = 0; i < count; i++) {
		if (i % 2 == 0) {
			// 右上方向
			// 如果是右上方向, 坐标 m--, n++
			// 右上方向, 位置判断条件
			while (m >= 0 && n < columnLen) {
				resArr[resArrIndex] = mat[m][n];
				resArrIndex++;
				m--;
				n++;
			}
			// 边界判断, 右上边界判断, 分为两种情况
			if (n < columnLen) {
				m++;
			} else {
				m += 2;
				n--;
			}
		} else {
			// 左下方向
			// 如果是左下, 坐标更新, m++, n--
			while (m < rowLen && n >= 0) {
				resArr[resArrIndex] = mat[m][n];
				resArrIndex++;
				m++;
				n--;
			}
			// 左下边界判断也分为两种情况
			if (m < rowLen) {
				n++;
			} else {
				n += 2;
				m--;
			}
		}
	}

	return resArr;
};
// @lc code=end
