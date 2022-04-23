/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// map 思路
// var twoSum = function(nums, target) {
//   let numsMap = {};

//   for (let i = 0; i < nums.length; i++) {
//     let other = target - nums[i];

//     if (other in numsMap) {
//       return [numsMap[other], i];
//     } else {
//       numsMap[nums[i]] = i;
//     }
//   }

//   return [];
// };

// 双指针思路
var twoSum = function (nums, target) {
  const sortNums = JSON.parse(JSON.stringify(nums)).sort((a, b) => a - b);
  let left = 0;
  let right = sortNums.length - 1;

  while (left < right) {
    const sum = sortNums[left] + sortNums[right];

    if (sum === target) {
      return [nums.indexOf(sortNums[left]), nums.lastIndexOf(sortNums[right])];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
}
// @lc code=end

