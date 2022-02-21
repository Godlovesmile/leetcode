/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let arr = [];
    let max = 0;

    for (let i in s) {
        if (arr.includes(s[i])) {
            arr.splice(0, arr.indexOf(s[i]) + 1);
        }

        arr.push(s[i]);
        max = Math.max(max, arr.length);
    }

    return max;
};
// @lc code=end

