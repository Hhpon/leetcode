/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
var deleteDuplicates = function (head) {
  const newHead = new ListNode(-1)
  newHead.next = head
  let cur = newHead
  while (cur.next != null && cur.next.next != null) {
    let x
    if (cur.next.val == cur.next.next.val) {
      x = cur.next.val
      while (cur.next != null && cur.next.val == x) {
        cur.next = cur.next.next
      }
    } else {
      cur = cur.next
    }
  }
  return newHead.next
}
// @lc code=end
