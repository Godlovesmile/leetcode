/*
 * @lc app=leetcode.cn id=125 lang=golang
 *
 * [125] 验证回文串
 */

// @lc code=start
func isPalindrome(s string) bool {
	var filterS string
	for i := 0; i < len(s); i++ {
		if isLetterOrNumber(s[i]) {
			filterS += string(s[i])
		}
	}

	filterS = strings.ToLower(filterS)
	for i := 0; i < len(filterS); i++ {
		if filterS[i] != filterS[len(filterS)-i-1] {
			return false
		}
	}

	return true
}
func isLetterOrNumber(ch byte) bool {
	return (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || (ch >= '0' && ch <= '9')
}

// @lc code=end

