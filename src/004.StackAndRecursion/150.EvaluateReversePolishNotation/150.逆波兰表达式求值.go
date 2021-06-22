/*
 * @lc app=leetcode.cn id=150 lang=golang
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
func evalRPN(tokens []string) int {
	stacks := []int{}

	for _, v := range tokens {
		val, err := strconv.Atoi(v)

		if err == nil {
			stacks = append(stacks, val)
		} else {
			num1, num2 := stacks[len(stacks)-2], stacks[len(stacks)-1]
			stacks = stacks[:len(stacks)-2]

			switch v {
			case "+":
				stacks = append(stacks, num1+num2)
			case "-":
				stacks = append(stacks, num1-num2)
			case "*":
				stacks = append(stacks, num1*num2)
			default:
				stacks = append(stacks, num1/num2)
			}

		}
	}

	return stacks[0]
}

// @lc code=end

