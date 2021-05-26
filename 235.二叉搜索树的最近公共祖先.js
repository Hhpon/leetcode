/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let currentNode = root
  while (true) {
    if (compareFn(currentNode, p) > 0 && compareFn(currentNode, q) > 0) {
      currentNode = currentNode.left
    } else if (compareFn(currentNode, p) < 0 && compareFn(currentNode, q) < 0) {
      currentNode = currentNode.right
    } else {
      return currentNode
    }
  }
}

var compareFn = function (a, b) {
  return a.val - b.val
}

/*
var lowestCommonAncestor = function (root, p, q) {
  const pathP = []
  const pathQ = []

  getPath(root, p, pathP)
  getPath(root, q, pathQ)

  let commonAncestor
  for (let i = 0; i < Math.min(pathP.length, pathQ.length); i++) {
    if (pathP[i] !== pathQ[i]) {
      break
    }
    commonAncestor = pathP[i]
  }
  return commonAncestor
}
*/

/**
 *
 * @param {TreeNode} root
 * @param {TreeNode} keyNode
 * @param {TreeNode[]} path
 */
/*
var getPath = function (root, keyNode, path) {
  path.push(root)
  if (compareFn(root, keyNode) > 0) {
    getPath(root.left, keyNode, path)
  } else if (compareFn(root, keyNode) < 0) {
    getPath(root.right, keyNode, path)
  }
}
*/
// @lc code=end
