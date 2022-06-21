/*
 * @lc app=leetcode.cn id=53 lang=golang
 *
 * [53] 最大子数组和
 */

// @lc code=start
func maxSubArray(nums []int) int {
	max := nums[0]
	sum := nums[0]

	for i := 1; i < len(nums); i++ {
		if sum + nums[i] < nums[i] {
			sum = nums[i]

			if sum > max {
				max = sum
			}

			continue
		}

		sum += nums[i]
	
		if sum > max {
			max = sum
		}
	}

	return max
}
// @lc code=end

