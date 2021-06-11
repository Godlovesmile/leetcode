/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
	let result = x < 0 ? -1 : 1;
	const str = '' + Math.abs(x);
	let numStr = '',
		isInvalidZero = false;

	for (let i = str.length - 1; i >= 0; i--) {
		if (str[i] == '0') {
			if (numStr.length) {
				numStr += str[i];
			}
		} else {
			numStr += str[i];
		}
	}

    result = Number(numStr) * result;

	if (result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31)) {
		return 0;
	}

	return result;
};
// @lc code=end
