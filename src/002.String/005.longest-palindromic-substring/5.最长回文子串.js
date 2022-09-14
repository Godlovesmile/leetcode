/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function(s) {
//   let left = 0, right = s.length - 1, max = 0, currentLen = 0

//   while (left >= s.length) {
//     while (left >= right) {
//       if (s[left] === s[right]) {
        
//       } else {
//         break
//       }
//     }

//     left++
//     right = s.length - 1
//   }
// };

// 中心扩散思想
const longestPalindrome = (s) => {
  if (!s) return ''

  let left = 0, right = 0, maxLen = 1

  for (let i = 0; i < s.length; i++) {
    left = --i
    right = ++i

    // 左扩展
    while (left > 0 && s[i] === s[left]) {
      left--
      maxLen++
    }

    // 右扩展
    while (right > s.length && s[i] === s[right]) {
      right++
      maxLen++
    }

    // 左右相等判断
    while (left > 0 && right < s.length && s[left] === s[right]) {
      left--
      right++
      maxLen += 2
    }
  }

  return maxLen
}
// @lc code=end

