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
  let startPath = "",
    destPath = "";
  const queue = [[root, ""]];
  while (queue.length && !(startPath.length && destPath.length)) {
    const [node, path] = queue.pop();
    if (node === null) continue;
    if (node.val === startValue) {
      startPath = path;
    }
    if (node.val === destValue) {
      destPath = path;
    }
    queue.push([node.left, path + "L"]);
    queue.push([node.right, path + "R"]);
  }
  // const dfs = (node, path) => {
  //   if(node === null || (startPath.length && destPath.length))return
  //   dfs(node.left, path+"L")
  //   dfs(node.right, path+"R")
  // }
  // dfs(root, "")
  let i;
  for (i = 0; i < startPath.length; i++) {
    if (startPath[i] !== destPath[i]) break;
  }
  return "U".repeat(startPath.length - i) + destPath.slice(i);
};
