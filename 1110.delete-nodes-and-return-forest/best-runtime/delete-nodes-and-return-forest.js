function delNodes(root, to_delete) {
  let toDeleteSet = new Set(to_delete);
  let result = [];

  function helper(node, isRoot) {
    if (!node) return null;

    let rootDeleted = toDeleteSet.has(node.val);
    if (isRoot && !rootDeleted) {
      result.push(node);
    }

    node.left = helper(node.left, rootDeleted);
    node.right = helper(node.right, rootDeleted);

    return rootDeleted ? null : node;
  }

  helper(root, true);
  return result;
}

// Example usage:
// Constructing the tree [1,2,3,4,5,6,7]
let root = {
  val: 1,
  left: {
    val: 2,
    left: { val: 4, left: null, right: null },
    right: { val: 5, left: null, right: null },
  },
  right: {
    val: 3,
    left: { val: 6, left: null, right: null },
    right: { val: 7, left: null, right: null },
  },
};

let to_delete = [3, 5];
console.log(delNodes(root, to_delete));
// Output: [[1,2,null,4],[6],[7]]
