/*
 * @lc app=leetcode.cn id=414 lang=golang
 *
 * [414] 第三大的数
 */

// @lc code=start
func thirdMax(nums []int) int {
	arr := uniqueArr(nums)
	sort.Sort(sort.Reverse(sort.IntSlice(arr)))

	if len(arr) >= 3 {
		return arr[2]
	}

	return arr[0]
}

// 数组去重
func uniqueArr(nums []int) []int {
	arr := make([]int, 0)
	tempMap := make(map[int]bool, len(nums))

	for _, v := range nums {
		if tempMap[v] == false {
			tempMap[v] = true
			arr = append(arr, v)
		}
	}

	return arr
}

// @lc code=end

