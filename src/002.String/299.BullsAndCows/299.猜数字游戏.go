/*
 * @lc app=leetcode.cn id=299 lang=golang
 *
 * [299] 猜数字游戏
 */

// @lc code=start
func getHint(secret string, guess string) string {
	result := ""
	A, B := 0, 0
	secretArr := make([]int, 10)
	guessArr := make([]int, 10)

	for i, v := range secret {
		secretNum, _ := strconv.Atoi(string(v))
		guessNum, _ := strconv.Atoi(string(guess[i]))

		if secretNum == guessNum {
			A++
		} else {
			secretArr[secretNum]++
			guessArr[guessNum]++
		}
	}

	for i := 0; i < 10; i++ {
		B += min(secretArr[i], guessArr[i])
	}

	result += strconv.Itoa(A) + "A" + strconv.Itoa(B) + "B"

	return result
}

func min(a int, b int) int {
	if a < b {
		return a
	}
	return b
}

// @lc code=end

