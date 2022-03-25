/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (root == null) return []
  const result = []
  const q = [root]
  let curLevelLength, temNode
  while (q.length > 0) {
    curLevelLength = q.length
    result.unshift([])
    for (let i = 0; i < curLevelLength; i++) {
      temNode = q.shift()
      result[0].push(temNode.val)
      if (temNode.left != null) q.push(temNode.left)
      if (temNode.right != null) q.push(temNode.right)
    }
  }
  return result
}
// @lc code=end
