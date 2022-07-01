/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  const q = []
  function preOrder(node) {
    if (node == null) return
    q.push(node)
    preOrder(node.left)
    preOrder(node.right)
  }
  preOrder(root)
  const newRoot = new TreeNode(-1)
  let cur = newRoot
  for (let i = 0; i < q.length; i++) {
    cur.right = q[i]
    q[i].left = null
    cur = cur.right
  }
  return newRoot.right
}

// @lc code=end
