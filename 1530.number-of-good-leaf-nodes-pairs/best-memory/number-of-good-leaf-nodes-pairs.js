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
 * @param {number} distance
 * @return {number}
 */
var countPairs = function (root, distance) {
  let res = 0;
  function dfsTreeNode(node = root) {
    if (!node) return Array(distance + 1).fill(0);
    let { left, right } = node;
    if (!left && !right) return [1];
    // Initialize distances array with appropriate size
    let distances = Array(distance + 1).fill(0);
    let leftD = dfsTreeNode(node.left);
    let rightD = dfsTreeNode(node.right);

    for (let l = 0; l <= distance; l++) {
      for (let r = 0; r <= distance; r++) {
        if (l + r + 2 > distance) continue;
        res += (leftD[l] || 0) * (rightD[r] || 0);
      }
    }
    for (let index = 0; index < distance; index++) {
      distances[index + 1] = (leftD[index] || 0) + (rightD[index] || 0);
    }
    return distances;
  }
  dfsTreeNode();
  return res;
};
