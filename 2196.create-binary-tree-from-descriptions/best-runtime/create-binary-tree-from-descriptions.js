/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function (desc) {
  let mp = new Map();
  let childSet = new Set();

  for (let v of desc) {
    let parent = v[0];
    let child = v[1];
    let isLeft = v[2];

    if (!mp.has(parent)) {
      mp.set(parent, new TreeNode(parent));
    }
    if (!mp.has(child)) {
      mp.set(child, new TreeNode(child));
    }
    if (isLeft) {
      mp.get(parent).left = mp.get(child);
    } else {
      mp.get(parent).right = mp.get(child);
    }
    childSet.add(child);
  }
  for (const v of desc) {
    let parent = v[0];
    if (!childSet.has(parent)) {
      return mp.get(parent);
    }
  }
  return null;
};
