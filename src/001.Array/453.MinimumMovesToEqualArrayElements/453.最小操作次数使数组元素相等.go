/*
 * @lc app=leetcode.cn id=453 lang=golang
 *
 * [453] 最小操作次数使数组元素相等
 */

// @lc code=start
func minMoves(nums []int) int {
	minVal := min(nums)
	k := 0

	for _, v := range nums {
		if v > minVal {
			k += v - minVal
		}
	}

	return k
}

func min(nums []int) int {
	m := nums[0]

	for _, v := range nums {
		if v < m {
			m = v
		}
	}

	return m
}

// @lc code=end

