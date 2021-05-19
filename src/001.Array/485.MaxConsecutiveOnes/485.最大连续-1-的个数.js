/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
	let maxOnesLen = 0;

	if (!Array.isArray(nums)) return maxOnesLen;

	const strNums = nums.join('');
	const arrOnes = strNums.split('0');

	arrOnes.forEach((i) => {
        if (i.length > maxOnesLen) {
            maxOnesLen = i.length;
        }
    });

    return maxOnesLen;
};
// @lc code=end
