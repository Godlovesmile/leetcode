/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  const [max, min] = a.length >= b.length ? [a, b] : [b, a]
  let str = '', index = 0
  let j = min.length

  for (let i = max.length - 1; i >= 0; i--) {
    let sum = Number(max[i]) + index

    if (--j >= 0) {
      sum += Number(min[j])
    } 
    
    if (sum == 2) {
      index = 1
      str = '0' + str
    } else if (sum == 0) {
      index = 0
      str = '0' + str
    } else if (sum > 2) {
      index = 1
      str = '1' + str
    } else {
      index = 0
      str = '1' + str
    }
  }

  if (index) {
    str = '1' + str
  }

  return str
};
// 100
// console.log(addBinary('1111', '1111'))
// @lc code=end

