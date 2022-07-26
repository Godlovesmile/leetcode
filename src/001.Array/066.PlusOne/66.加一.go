/*
 * @lc app=leetcode.cn id=66 lang=golang
 *
 * [66] 加一
 */

// @lc code=start
func plusOne(digits []int) []int {
	for i := len(digits) - 1; i >= 0; i-- {
		item := digits[i] + 1
		if item % 10 == 0 {
			digits[i] = 0
		} else {
			digits[i] = item
			return digits
		}
	}

	digits = make([]int, len(digits) + 1)
	digits[0] = 1

	return digits
}
// @lc code=end

