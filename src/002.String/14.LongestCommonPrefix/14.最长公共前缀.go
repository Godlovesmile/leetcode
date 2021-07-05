/*
 * @lc app=leetcode.cn id=14 lang=golang
 *
 * [14] 最长公共前缀
 */

// @lc code=start
func longestCommonPrefix(strs []string) string {
	result := strs[0]

	for _, v := range strs {
		for strings.Index(v, result) != 0 {
			if len(result) == 0 {
				return ""
			}
			result = result[:len(result)-1]
		}
	}

	return result
}

// @lc code=end

