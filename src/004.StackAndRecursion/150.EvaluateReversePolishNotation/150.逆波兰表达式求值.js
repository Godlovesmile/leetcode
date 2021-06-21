/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
	const symbols = ['+', '-', '*', '/'];
	let stacks = [];

	for (const i of tokens) {
		if (symbols.includes(i)) {
			const next = Number(stacks.pop());
			const pre = Number(stacks.pop());
			let newItem = null;

			if (i === '+') {
				newItem = pre + next;
			}
			if (i === '-') {
				newItem = pre - next;
			}
			if (i === '*') {
				newItem = pre * next;
			}
			if (i === '/') {
				newItem =
					pre / next > 0
						? Math.floor(pre / next)
						: Math.ceil(pre / next);
			}
			stacks.push(newItem);
		} else {
			stacks.push(i);
		}
	}
	// console.log(stacks);
	return stacks.pop();
};
// evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']);
// @lc code=end
