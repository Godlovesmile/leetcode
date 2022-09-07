/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 递归思想, 看树是否为镜像, 例如第 100 题思路, 判断是否为相同树的思想
const check = (p, q) => {
  if (!p && !q) return true
  if (!p || !q) return false  
  if (p.val != q.val) return false

  return check(p.left, q.right) && check(p.right, q.left)
}

var isSymmetric = function(root) {
  return check(root, root)
};
// @lc code=end

