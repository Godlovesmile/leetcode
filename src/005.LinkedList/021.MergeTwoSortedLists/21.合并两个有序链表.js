/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let head = nextItem = new ListNode(-1);

    while (list1 || list2) {
        if (list1 && list2) {
            if (list1.val > list2.val) {
                nextItem.next = new ListNode(list2.val);
                nextItem = nextItem.next;
                list2 = list2.next;
            } else if (list1.val == list2.val) {
                nextItem.next = new ListNode(list1.val);
                nextItem = nextItem.next;
                nextItem.next = new ListNode(list2.val);
                nextItem = nextItem.next;
                list1 = list1.next;
                list2 = list2.next;
            } else if (list1.val < list2.val) {
                nextItem.next = new ListNode(list1.val);
                nextItem = nextItem.next;
                list1 = list1.next;
            }
        } else {
            if (list1) {
                nextItem.next = list1;
                nextItem = nextItem.next;
                list1 = null;
            }
            if (list2) {
                nextItem.next = list2;
                nextItem = nextItem.next;
                list2 = null;
            }
        }
    }

    return head.next;
};
// @lc code=end

