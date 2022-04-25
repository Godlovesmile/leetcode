/*
 * @lc app=leetcode.cn id=9 lang=golang
 *
 * [9] 回文数
 */

// @lc code=start
// 数学思想
func isPalindrome(x int) bool {
	if x < 0 || (x % 10 == 0 && x != 0) {
		return false
	}

	cur := 0
	tempX := x
	for tempX != 0 {
		cur = cur * 10 + tempX % 10
		tempX = tempX / 10
	}

	return x == cur
}
// @lc code=end

