/*
 * @lc app=leetcode.cn id=665 lang=javascript
 *
 * [665] 非递减数列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
    let count = 0;

	for (let i = 0; i < nums.length - 1; ++i) {
		const x = nums[i],
			y = nums[i + 1];
		if (x > y) {
			count++;
			if (count > 1) {
				return false;
			}
			if (i > 0 && y < nums[i - 1]) {
				nums[i + 1] = x;
			}
		}
        // console.log(nums);
	}
	return true;
};
// console.log(checkPossibility([1, 2, 4, 1]));
// @lc code=end
