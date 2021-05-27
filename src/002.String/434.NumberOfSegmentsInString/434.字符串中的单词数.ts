/*
 * @lc app=leetcode.cn id=434 lang=typescript
 *
 * [434] 字符串中的单词数
 */

// @lc code=start
function countSegments(s: string): number {
	const reg = /[^ ]+/g;
	const res: string[] = s.match(reg);

	return res ? res.length : 0;
}
// @lc code=end
