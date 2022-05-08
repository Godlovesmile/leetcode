/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 普通思路
// var removeElement = function(nums, val) {
//   let index = 0;

//   for (const i of nums) {
//     if (i !== val) {
//       nums[index++] = i;
//     }
//   }

//   return index;
// };

// 双指针思路
var removeElement = function(nums, val) {
  let left = 0, right = nums.length - 1;

  while (left <= right) {
    if (nums[left] == val) {
      nums[left] = nums[right];
      right--;
    } else {
      left++;
    }
  }

  return left;
};
// @lc code=end

