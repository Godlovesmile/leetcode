/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
	const n = nums.length;
	const tempArr = new Array(n);
	for (let i = 0; i < n; i++) {
		// console.log((i + k) % n);
		tempArr[(i + k) % n] = nums[i];
	}
	for (let i = 0; i < n; i++) {
		nums[i] = tempArr[i];
	}
	// return tempArr;
};
// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
// @lc code=end
