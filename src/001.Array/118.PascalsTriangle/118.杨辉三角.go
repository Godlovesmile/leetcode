/*
 * @lc app=leetcode.cn id=118 lang=golang
 *
 * [118] 杨辉三角
 */

// @lc code=start
func generate(numRows int) [][]int {
	generateArrs := make([][]int, numRows)
	generateArrs[0] = make([]int, 1)
	generateArrs[0][0] = 1

	if numRows == 1 {
		return generateArrs
	}

	for i := 1; i < numRows; i++ {
		generateArrs[i] = make([]int, i+1)
		tempRrr := make([]int, i+1)
		copy(tempRrr, generateArrs[i-1])
		tempRrr[i] = 0

		for index, v := range tempRrr {
			generateArrs[i][index] = v + tempRrr[len(tempRrr)-index-1]
		}
	}

	// fmt.Println(generateArrs)
	return generateArrs
}

// @lc code=end

