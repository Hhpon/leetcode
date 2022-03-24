/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  function build(x, y, m, n) {
    if (x > y || m > n) {
      return null
    }
    const root = new TreeNode(postorder[n])
    let i
    for (i = x; i <= y; i++) {
      if (inorder[i] == postorder[n]) break
    }
    root.left = build(x, i - 1, m, m + i - x - 1)
    root.right = build(i + 1, y, m + i - x, n - 1)
    return root
  }
  return build(0, inorder.length - 1, 0, postorder.length - 1)
}
// @lc code=end
