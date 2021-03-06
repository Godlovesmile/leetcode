/*
 * @lc app=leetcode.cn id=35 lang=golang
 *
 * [35] 搜索插入位置
 */

// @lc code=start
func searchInsert(nums []int, target int) int {
	l := 0
	r := len(nums)

	for l < r {
		mid := l + (r - l) / 2

		if nums[mid] == target {
			return mid
		}

		if nums[mid] < target {
			l = mid + 1
		} else {
			r = mid
		}
	}

	return l
}
// @lc code=end

