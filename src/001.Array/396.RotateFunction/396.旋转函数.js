/*
 * @lc app=leetcode.cn id=396 lang=javascript
 *
 * [396] 旋转函数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * 把数组逆转跟把乘数逆转是一样的，可以看出有如下规律
 *   4     3     2     6
 *
 *  0*4   1*3   2*2   3*6   F(0)
 * 
 *  3*4   0*3   1*2   2*6   F(1) = F(0) - SUM(data) + N * data[0];
 *
 *  2*4   3*3   0*2   1*6   F(2) = F(1) - SUM(data) + N * data[1];
 *
 *  1*4   2*3   3*2   0*6   F(3) = F(2) - SUM(data) + N * data[2];
 *
 */
var maxRotateFunction = function (nums) {
	const len = nums.length;
	let preFnSum = 0,
		sum = 0,
		maxFnSum = 0;

	for (let i = 0; i < len; i++) {
		preFnSum += i * nums[i];
		sum += nums[i];
	}

	maxFnSum = preFnSum;

	for (let i = 1; i < len; i++) {
		const currentFnSum = preFnSum - sum + len * nums[i - 1];
		preFnSum = currentFnSum;
		maxFnSum = Math.max(maxFnSum, currentFnSum);
	}

	return maxFnSum;
};
// @lc code=end
