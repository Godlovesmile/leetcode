/*
 * @lc app=leetcode.cn id=697 lang=golang
 *
 * [697] 数组的度
 */

// @lc code=start

type entry struct{ cnt, l, r int }

func findShortestSubArray(nums []int) int {
	mp := map[int]entry{}

	for i, v := range nums {
		if e, has := mp[v]; has {
			e.cnt++
			e.r = i
			mp[v] = e
		} else {
			mp[v] = entry{1, i, i}
		}
	}

	maxCnt := 0
	degree := 0
	for _, e := range mp {
		if e.cnt > maxCnt {
			maxCnt, degree = e.cnt, e.r-e.l+1
		} else if e.cnt == maxCnt {
			degree = min(degree, e.r-e.l+1)
		}
	}

	return degree
}

func min(a, b int) int {
	if a > b {
		return b
	}

	return a
}

// @lc code=end

