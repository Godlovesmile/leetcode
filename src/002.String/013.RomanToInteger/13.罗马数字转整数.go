/*
 * @lc app=leetcode.cn id=13 lang=golang
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
func romanToInt(s string) (sum int) {
	var symbolValus = map[byte]int{'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}

	for i := 0; i < len(s); i++ {
		cur := symbolValus[s[i]]
		if i < len(s) - 1 && cur < symbolValus[s[i+1]] {
			sum -= cur
		} else {
			sum += cur
		}
	}

	return
}
// @lc code=end

