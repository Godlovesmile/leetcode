/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */

// 双指针思想 
var isPalindrome = function(x) {
  if (x < 0) false;
  let strX = '' + x;
  let l = 0, r = strX.length - 1;

  while (l <= r) {
    if (strX[l] !== strX[r]) return false;
    l++;
    r--;
  }

  return true;
};
// @lc code=end

