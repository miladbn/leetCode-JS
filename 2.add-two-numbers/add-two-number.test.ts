import { ListNode, addTwoNumbers } from "./add-two-number";

function createLinkedList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;
  const head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

function linkedListToArray(node: ListNode | null): number[] {
  const result: number[] = [];
  while (node) {
    result.push(node.val);
    node = node.next;
  }
  return result;
}

test("Add two numbers without carry-over", () => {
  const l1 = createLinkedList([2, 4, 3]);
  const l2 = createLinkedList([5, 6, 4]);
  const result = addTwoNumbers(l1, l2);
  expect(linkedListToArray(result)).toEqual([7, 0, 8]);
});

test("Add two numbers with carry-over", () => {
  const l1 = createLinkedList([9, 9, 9]);
  const l2 = createLinkedList([1]);
  const result = addTwoNumbers(l1, l2);
  expect(linkedListToArray(result)).toEqual([0, 0, 0, 1]);
});

test("Add two numbers of different lengths", () => {
  const l1 = createLinkedList([1, 8]);
  const l2 = createLinkedList([0]);
  const result = addTwoNumbers(l1, l2);
  expect(linkedListToArray(result)).toEqual([1, 8]);
});

test("Add two numbers resulting in a new node due to carry-over", () => {
  const l1 = createLinkedList([5]);
  const l2 = createLinkedList([5]);
  const result = addTwoNumbers(l1, l2);
  expect(linkedListToArray(result)).toEqual([0, 1]);
});

test("Add two numbers where both numbers are zero", () => {
  const l1 = createLinkedList([0]);
  const l2 = createLinkedList([0]);
  const result = addTwoNumbers(l1, l2);
  expect(linkedListToArray(result)).toEqual([0]);
});
