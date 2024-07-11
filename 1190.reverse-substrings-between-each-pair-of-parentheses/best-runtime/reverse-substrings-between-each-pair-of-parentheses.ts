function reverseParentheses(s: string): string {
  let stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")") {
      let str: string[] = [];
      while (stack[stack.length - 1] !== "(") {
        str.push(stack.pop()!);
      }
      stack.pop(); // remove '('
      stack = [...stack.concat(str)];
      continue;
    }
    stack.push(s[i]);
  }
  return stack.join("");
}
