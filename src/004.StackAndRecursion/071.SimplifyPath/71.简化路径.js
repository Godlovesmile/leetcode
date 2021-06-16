/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
	const stack = [];
	path = path.split('/');

	for (const i of path) {
		if (i === '..' && stack.length) {
			stack.pop();
		} else if (i !== '.' && i !== '' && i !== '..') {
			stack.push(i);
		}
	}

	return '/' + stack.join('/');
};
// console.log(simplifyPath('/a/./b/../../c/'));
// @lc code=end
