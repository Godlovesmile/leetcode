/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
	const n = s.length;
	const arr = Array.from(s);
	for (let i = 0; i < n; i += 2 * k) {
		reverse(arr, i, Math.min(i + k - 1, n - 1));
	}
	return arr.join('');
};

function reverse(arr, left, right) {
	while (left < right) {
		[arr[left], arr[right]] = [arr[right], arr[left]];
		left++;
		right--;
	}
}
// @lc code=end
