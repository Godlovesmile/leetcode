/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
	let j = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] != 0) {
			const temp = nums[i];
			nums[i] = nums[j];
			nums[j++] = temp;
		}
	}

	return nums;
};
// console.log(moveZeroes([1, 2, 3]));
// @lc code=end
