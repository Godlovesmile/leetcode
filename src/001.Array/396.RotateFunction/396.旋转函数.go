/*
 * @lc app=leetcode.cn id=396 lang=golang
 *
 * [396] 旋转函数
 */

// @lc code=start
func maxRotateFunction(nums []int) int {
	len := len(nums)
	preSumFn := 0
	sum := 0

	for i := 0; i < len; i++ {
		preSumFn += i * nums[i]
		sum += nums[i]
	}

	maxSumFn := preSumFn

	for i := 1; i < len; i++ {
		currentSumFn := preSumFn - sum + len*nums[i-1]
		preSumFn = currentSumFn
		maxSumFn = max(maxSumFn, currentSumFn)
	}

	return maxSumFn
}

func max(a int, b int) int {
	if a > b {
		return a
	}
	return b
}

// @lc code=end

