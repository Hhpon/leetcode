/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  function build(x, y, m, n) {
    if (x > y || m > n) return null
    const root = new TreeNode(preorder[x])
    let i
    for (i = m; i <= n; i++) {
      if (inorder[i] == preorder[x]) break
    }
    root.left = build(x + 1, i - m + x, m, i - 1)
    root.right = build(i - m + x + 1, y, i + 1, n)
    return root
  }
  return build(0, preorder.length - 1, 0, inorder.length - 1)
}
// @lc code=end
