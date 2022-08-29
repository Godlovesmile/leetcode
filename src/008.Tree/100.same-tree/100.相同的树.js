/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// var isSameTree = function(p, q) {
//   const inorderTraversal = (root) => {
//     const res = []
//     const inorder = (root) => {
//       if (!root) {
//         res.push(null)
//         return
//       }

//       inorder(root.left)
//       res.push(root.val)
//       inorder(root.right)
//     }

//     inorder(root)
//     return res
//   }

//   const isEqualArr = (a, b) => {
//     if (a.length != b.length) return false

//     for (let i = 0; i < a.length; i++) {
//       if (a[i] != b[i]) return false
//     }

//     return true
//   }

//   const pArr = inorderTraversal(p)
//   const qArr = inorderTraversal(q)
//   console.log(pArr)
//   console.log(qArr)
//   return isEqualArr(pArr, qArr)
// };

// 深度优先, 递归
var isSameTree = function(p, q) {
  if (!p && !q) return true
  if (!p || !q) return false
  if (p.val != q.val) return false

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}
// @lc code=end

