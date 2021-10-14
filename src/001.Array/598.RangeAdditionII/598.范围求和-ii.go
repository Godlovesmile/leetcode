/*
 * @lc app=leetcode.cn id=598 lang=golang
 *
 * [598] 范围求和 II
 */

// @lc code=start
func maxCount(m int, n int, ops [][]int) int {
	newArr := make([][]int, m)
	for i = 0; i < m; i++ {
		newArr[i] = make([]int, n)
	}

	for i = 0; i < len(ops); i++ {
		for j = 0; j < len(ops[i][0]); j++ {
			for k = 0; k < ops[i][1]; k++ {
			}
		}
	}
}

// @lc code=end

