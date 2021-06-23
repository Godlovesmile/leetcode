/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	const len = s.length;

	if (len % 2 === 1) return false;

	const pairs = new Map([
		['{', '}'],
		['(', ')'],
		['[', ']'],
	]);
	let stack = [];

	for (const v of s) {
		if (pairs.has(v)) {
			// 左括号
			stack.push(v);
		} else {
			// 右括号
			if (!stack.length || v != pairs.get(stack[stack.length - 1]))
				return false;
			stack.pop();
		}
	}

	return !stack.length;
};
// console.log(isValid('()'));
// @lc code=end
