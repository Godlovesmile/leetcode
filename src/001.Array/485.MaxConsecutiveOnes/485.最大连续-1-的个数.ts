/*
 * @lc app=leetcode.cn id=485 lang=typescript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
function findMaxConsecutiveOnes(nums: number[]): number {
	let maxOnesLen = 0;
	let onesCount = 0;

	for (const i of nums) {
		if (i === 1) {
			onesCount++;
			maxOnesLen = Math.max(maxOnesLen, onesCount);
		} else {
			onesCount = 0;
			// if (onesCount > maxOnesLen) {
			// 	maxOnesLen = onesCount;
			// }
		}
	}

	// if (onesCount > maxOnesLen) {
	// 	maxOnesLen = onesCount;
	// }

	return maxOnesLen;
}
// @lc code=end
