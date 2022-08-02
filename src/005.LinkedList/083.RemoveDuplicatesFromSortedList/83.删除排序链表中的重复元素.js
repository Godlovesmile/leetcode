/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head) {
    return head
  }

  const countMap = {}
  let list = head

  countMap[list.val] = 1

  while (list.next) {
    if (countMap[list.next.val]) {
      list.next = list.next && list.next.next
    } else {
      countMap[list.next.val] = 1
      list = list.next
    }
  }

  return head
};
// @lc code=end

