/*
 * @lc app=leetcode.cn id=58 lang=golang
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
func lengthOfLastWord(s string) int {
	index := len(s) - 1
	count := 0

	for s[index] == ' ' {
		index--
	}

	for index >= 0 && s[index] != ' ' {
		index--
		count++
	}
	return count
}

// @lc code=end

