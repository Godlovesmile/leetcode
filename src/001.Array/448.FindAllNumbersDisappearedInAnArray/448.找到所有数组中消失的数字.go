/*
 * @lc app=leetcode.cn id=448 lang=golang
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
func findDisappearedNumbers(nums []int) (result []int) {
	for _, v := range nums {
		index := (v - 1) % len(nums)
		nums[index] += len(nums)
	}
	for i, v := range nums {
		if v <= len(nums) {
			result = append(result, i+1)
		}
	}
	return
}

// @lc code=end

