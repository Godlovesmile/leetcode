/*
 * @lc app=leetcode.cn id=485 lang=golang
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
func findMaxConsecutiveOnes(nums []int) int {
	maxOnesLen := 0
	count := 0

	for _, v := range nums {
		if v == 1 {
			count++
		} else {
			maxOnesLen = max(maxOnesLen, count)
			count = 0
		}
	}

	maxOnesLen = max(maxOnesLen, count)

	return maxOnesLen
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

// @lc code=end

