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
var createBinaryTree = function (descriptions) {
  const nodeMapping = {};
  let root = 0;

  const getNode = (val, isChild) => {
    if (isChild) {
      root -= val;
    }

    if (!nodeMapping[val]) {
      root += val;
      nodeMapping[val] = {
        val,
        left: null,
        right: null,
      };
    }
    return nodeMapping[val];
  };

  descriptions.forEach(([pVal, chVal, isLeft]) => {
    const parent = getNode(pVal);
    const child = getNode(chVal, true);
    if (isLeft) {
      parent.left = child;
    } else {
      parent.right = child;
    }
  });

  return nodeMapping[root];
};
