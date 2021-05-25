/*
 * @lc app=leetcode.cn id=442 lang=typescript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
function findDuplicates(nums: number[]): number[] {
	let res: number[] = [];
	for (const num of nums) {
		const absNum = Math.abs(num);
		if (nums[absNum - 1] < 0) {
			res.push(absNum);
		} else {
			nums[absNum - 1] = -1 * nums[absNum - 1];
		}
	}
    return res;
}
// @lc code=end
