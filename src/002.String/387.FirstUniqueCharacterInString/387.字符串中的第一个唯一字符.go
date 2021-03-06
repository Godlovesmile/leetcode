/*
 * @lc app=leetcode.cn id=387 lang=golang
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/*
func firstUniqChar_1(s string) int {
	for i := 0; i < len(s); i++ {
		if strings.Count(s, string(s[i])) == 1 {
			return i
		}
	}

	return -1
}
*/
func firstUniqChar(s string) int {
	var arr [26]int

	for i, v := range s {
		arr[v-'a'] = i
	}

	for i, v := range s {
		if i == arr[v-'a'] {
			return i
		} else {
			arr[v-'a'] = -1
		}
	}

	return -1
}

// @lc code=end

