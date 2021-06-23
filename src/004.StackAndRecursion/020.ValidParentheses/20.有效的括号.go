/*
 * @lc app=leetcode.cn id=20 lang=golang
 *
 * [20] 有效的括号
 */

// @lc code=start
func isValid(s string) bool {
	n := len(s)

	if n%2 == 1 {
		return false
	}

	pairs := map[byte]byte{
		'(': ')',
		'{': '}',
		'[': ']',
	}
	stacks := []byte{}

	for i := 0; i < n; i++ {
		if pairs[s[i]] > 0 {
			// 左括号
			stacks = append(stacks, s[i])
		} else {
			// 右括号
			if len(stacks) == 0 || s[i] != pairs[stacks[len(stacks)-1]] {
				return false
			}
			stacks = stacks[:len(stacks)-1]
		}
	}

	return len(stacks) == 0
}

// @lc code=end

