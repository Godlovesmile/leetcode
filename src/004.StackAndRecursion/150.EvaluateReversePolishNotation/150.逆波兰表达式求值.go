/*
 * @lc app=leetcode.cn id=150 lang=golang
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
func evalRPN(tokens []string) int {
	var stacks []string

	for _, v := range tokens {
		switch v {
		case "+":
		case "-":
		case "*":
		case "/":
		default:
			stacks = append(stacks, v)
		}
	}
}

// @lc code=end

