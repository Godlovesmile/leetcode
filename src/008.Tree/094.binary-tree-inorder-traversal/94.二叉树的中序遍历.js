/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
// 递归, 隐式维护一个栈
// var inorderTraversal = function(root) {
//   const result = []

//   const inorder = (root) => {
//     if (!root) return

//     inorder(root.left)
//     result.push(root.val)
//     inorder(root.right)
//   }

//   inorder(root)

//   return result
// };

// 迭代, 需要显示维护一个栈
const inorderTraversal = function(root) {
  const result = []
  const satck = []

  while (root || satck.length) {
    while (root) {
      satck.push(root)
      root = root.left
    }

    root = satck.pop()
    result.push(root.val)
    root = root.right
  }

  return result
}

// [1, 4, 2, 5, 3]
// [4, 1, 5, 2, 3]
// [1, 4, 2, 6, 7, 5, 3]
// @lc code=end

