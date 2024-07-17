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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function (root, to_delete) {
  const deleteSet = new Set(to_delete);
  const res = [];

  const add = (node) => {
    if (node && !deleteSet.has(node?.val)) {
      res.push(node);
    }
  };

  const searchRoots = (node, parent) => {
    if (!node) {
      return;
    }

    if (deleteSet.has(node.val)) {
      add(node.left);
      add(node.right);

      if (parent.left === node) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    }

    searchRoots(node.left, node);
    searchRoots(node.right, node);
  };

  if (deleteSet.has(root.val)) {
    add(root.left);
    add(root.right);
  } else {
    add(root);
  }

  searchRoots(root.left, root);
  searchRoots(root.right, root);

  return res;
};
