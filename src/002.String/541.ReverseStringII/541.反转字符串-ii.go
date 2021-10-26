/*
 * @lc app=leetcode.cn id=541 lang=golang
 *
 * [541] 反转字符串 II
 */

// @lc code=start
func reverseStr(s string, k int) string {
	arr := []byte(s)
	for i := 0; i < len(s); i += 2 * k {
		end := min(i+k-1, len(s)-1)
		reverse(arr, i, end)
	}
	return string(arr)
}

func min(a int, b int) int {
	if a > b {
		return b
	}
	return a
}

func reverse(arr []byte, left int, right int) {
	for left < right {
		arr[left], arr[right] = arr[right], arr[left]
		left++
		right--
	}
}

// @lc code=end

