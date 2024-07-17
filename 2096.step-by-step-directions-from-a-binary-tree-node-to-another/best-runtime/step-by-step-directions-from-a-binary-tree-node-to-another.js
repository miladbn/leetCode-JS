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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function (root, startValue, destValue) {
  let left = dfs(root, startValue, []);
  let right = dfs(root, destValue, []);
  let i = 0;
  let lStr = "";
  let rStr = "";
  //console.log(left)
  while (left[i] && right[i] && left[i] == right[i]) {
    i++;
    // skip
  }
  //console.log("l", left[i-1], right[i-1])
  let j = Math.max(0, i),
    k = Math.max(0, i);
  while (left[j]) {
    lStr += "U";
    j++;
  }
  //console.log(left, right, k)
  while (right[k]) {
    rStr += right[k];
    k++;
  }

  return lStr + rStr;
};

function dfs(root, target, path) {
  if (root.val == target) return path;
  if (root.left) {
    path.push("L");
    let out = dfs(root.left, target, path);
    if (out) return out;
    path.splice(path.length - 1, 1);
  }
  if (root.right) {
    path.push("R");
    let out = dfs(root.right, target, path);
    if (out) return out;

    path.splice(path.length - 1, 1);
  }
  if (!root.left && !root.right) return null;
}
