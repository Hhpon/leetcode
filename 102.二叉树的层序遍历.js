/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function (root) {
  const result = []
  if (!root) {
    return result
  }

  const queue = []

  queue.push(root)

  while (queue.length !== 0) {
    const currentLevelSize = queue.length
    result.push([])

    // 此处遍历会把当前层所有的节点遍历尽，切把下一层的节点都添加进来
    for (let i = 0; i < currentLevelSize; i++) {
      // 此处如果从后面开始取就会出问题，因为实际上队列是动态的
      const node = queue.shift()

      result[result.length - 1].push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }

  return result
}

// @lc code=end
