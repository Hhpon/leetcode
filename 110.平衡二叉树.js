/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
var isBalanced = function (root) {
  return getHeight(root) >= 0
}

function getHeight(node) {
  if (node == null) return 0
  const leftLength = getHeight(node.left)
  const rightLength = getHeight(node.right)
  if (leftLength == -1 || rightLength == -1 || Math.abs(leftLength - rightLength) > 1) {
    return -1
  } else {
    return 1 + Math.max(leftLength, rightLength)
  }
}
// @lc code=end
