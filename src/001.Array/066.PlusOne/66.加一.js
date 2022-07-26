/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
// 不能转化为数字进行处理, 会溢出
// var plusOne = function(digits) {
//   let sum = 0;

//   for (let i = 0; i <= digits.length - 1; i++) {
//     sum = sum * 10 + digits[i]
//   }

//   sum += 1
//   console.log('=== sum ===', sum)
//   let arr = []

//   while (sum > 0) {
//     arr.unshift(sum % 10)
//     sum = parseInt(sum / 10)
//   }

//   return arr
// };

// 思路: 分为三种情况
/*
  1. 末位加一, 不进位
  2. 末位加一, 进位
  3. 所有元素都进位, 数组首位增加 1 处理
*/
var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    const addItem = digits[i] + 1

    if (addItem % 10 == 0) {
      digits[i] = 0
    } else {
      digits[i] = addItem

      return digits
    }
  }

  if (digits[0] == 0) {
    digits.unshift(1)
  }

  return digits
}
// const test = plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])
// console.log(test)
// @lc code=end

