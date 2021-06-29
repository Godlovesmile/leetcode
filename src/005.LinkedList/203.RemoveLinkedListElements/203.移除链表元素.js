/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    const mockHead = new ListNode(0);
    mockHead.next = head;
    let temp = mockHead;

    while (temp.next != null) {
        if (temp.next.val === val) {
            temp.next = temp.next.next;
        } else {
            temp = temp.next;
        }
    }
    return mockHead.next
};
// @lc code=end

