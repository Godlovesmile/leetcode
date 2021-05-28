/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
	let resultNums = [];
	resultNums[0] = 1;

	for (let i = 1; i < nums.length; i++) {
		resultNums[i] = resultNums[i - 1] * nums[i - 1];
	}

	// let rights = new Array(nums.length).fill(0);
	// rights[nums.length - 1] = 1;
    let r = 1;
	for (let i = nums.length - 1; i >= 0; i--) {
		resultNums[i] = resultNums[i] * r;
        r = nums[i] * r;
	}

	return resultNums;
};
// console.log(productExceptSelf([4, 3, 2, 1, 2]));
// @lc code=end
