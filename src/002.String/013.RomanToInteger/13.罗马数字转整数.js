/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const numsMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  // if (s.length === 2 && numsMap[s[0]] < numsMap[s[1]]) {
  //   return numsMap[s[1]] - numsMap[s[0]];
  // }

  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (i < s.length - 1 && numsMap[s[i]] < numsMap[s[i+1]]) {
      sum -= numsMap[s[i]];
    } else {
      sum += numsMap[s[i]];
    }
  }

  return sum;
};
// console.log(romanToInt('MCMXCIV'));
// @lc code=end

