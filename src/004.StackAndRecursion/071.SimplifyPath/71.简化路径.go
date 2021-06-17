/*
 * @lc app=leetcode.cn id=71 lang=golang
 *
 * [71] 简化路径
 */

// @lc code=start
/*
func simplifyPath(path string) string {
	var stack []string
	pathArr := strings.Split(path, "/")

	for _, v := range pathArr {
		if v == ".." && len(stack) > 0 {
			stack = stack[:len(stack)-1]
		} else if v != "." && v != ".." && v != "" {
			stack = append(stack, v)
		}
	}

	return "/" + strings.Join(stack, "/")
}
*/
import (
	path2 "path"
)

func simplifyPath(path string) string {
	return path2.Clean(path)
}

// @lc code=end

