/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
/*
'PAYPALISHIRING' 3


p   A   H   N     res[0] = 'PAHN'
A P L S I I G     res[1] = 'APLSIIG'
Y   I   R         res[2] = 'YIR'

算法流程： 按顺序遍历字符串 s；
1. res[i] += c： 把每个字符 c 填入对应行；
2. i += flag： 更新当前字符 c 对应的行索引；
3. flag = - flag： 在达到 ZZ 字形转折点时，执行反向.
*/ 
var convert = function(s, numRows) {
  if (s.length <= 2) return s

  let res = [], flag = -1, i = 0

  for (const c of s) {
    res[i] = (res[i] || '') + c
    
    if (i == 0 || i == numRows - 1) {
      flag = -flag
    }

    i += flag
  }

  return res.join('')
};
// @lc code=end

