/*
 * @lc app=leetcode.cn id=2 lang=golang
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func addTwoNumbers(l1 *ListNode, l2 *ListNode) (head *ListNode) {
	carry := 0
	var sumNode *ListNode
	
	for l1 != nil || l2 != nil {
		n1, n2 := 0, 0
		if l1 != nil {
			n1 = l1.Val
			l1 = l1.Next
		}
		if l2 != nil {
			n2 = l2.Val
			l2 = l2.Next
		}

		sum := n1 + n2 + carry
		sum, carry = sum % 10, sum / 10

		if head == nil {
			head = &ListNode{ Val: sum }
			sumNode = head
		} else {
			sumNode.Next = &ListNode{ Val: sum }
			sumNode = sumNode.Next
		}
	}

	if carry > 0 {
		sumNode.Next = &ListNode{ Val: carry }
	}

	return
}
// @lc code=end

