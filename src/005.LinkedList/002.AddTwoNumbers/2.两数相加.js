/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let carry = 0;
  let head, sumNode = null;

  while (l1 || l2) {
    let sum = (l1 && l1.val || 0) + (l2 && l2.val || 0) + carry;

    if (!head) {
      head = sumNode = new ListNode(sum % 10);
    } else {
      sumNode.next = new ListNode(sum % 10);
      // 节点重新赋值不要忘记
      sumNode = sumNode.next;
    }

    carry = Math.floor(sum / 10);

    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }

  if (carry > 0) {
    sumNode.next = new ListNode(carry);
  }

  return head;
};
// @lc code=end

