/**
 * Definition for singly-linked list.
 */
class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
  let up = 0;
  let l = new ListNode();
  let tree = l;

  while (true) {
    let value1 = l1 == null ? 0 : l1.val;
    let value2 = l2 == null ? 0 : l2.val;
    let sum = value1 + value2 + up;

    if (sum >= 10) {
      up = 1;
      sum -= 10;
    } else {
      up = 0;
    }

    l.val = sum;

    if (l1 != null) l1 = l1.next;
    if (l2 != null) l2 = l2.next;
    if (l1 == null && l2 == null && up == 0) break;

    l.next = new ListNode();
    l = l.next;
  }

  return tree;
}
