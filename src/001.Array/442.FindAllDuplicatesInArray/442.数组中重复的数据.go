/*
 * @lc app=leetcode.cn id=442 lang=golang
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
func findDuplicates(nums []int) []int {
	targets := make([]int, len(nums))
	res := make([]int, 0)

	for i := 0; i < len(nums); i++ {
		j := nums[i] - 1
		if targets[j] < 1 {
			targets[j] = 1
			continue
		}
		res = append(res, nums[i])
	}

	return res
}

// @lc code=end

