# `reverseParentheses` Function

## Description
The `reverseParentheses` function takes a string `s` containing lowercase English letters and parentheses and returns a new string where the contents of each pair of parentheses are reversed. Nested parentheses are handled correctly, with the innermost parentheses being reversed first.

## Parameters
- `s` (`string`): The input string containing lowercase English letters and parentheses.

## Returns
- `string`: The transformed string with the contents of each pair of parentheses reversed.

## Function Logic
1. **Initialization**:
    - A `stack` is initialized as an empty array to keep track of characters and help reverse the substrings within parentheses.

2. **Iteration over the String**:
    - The function iterates over each character in the string `s`.

3. **Handling Closing Parentheses `)`**:
    - When a closing parenthesis `)` is encountered, an empty array `str` is initialized to temporarily hold characters.
    - Characters are popped from the `stack` and pushed into `str` until an opening parenthesis `(` is encountered.
    - The opening parenthesis `(` is then popped from the `stack`.
    - The `str` array (which now contains the characters to be reversed) is concatenated back into the `stack`.

4. **Handling Other Characters**:
    - All other characters, including opening parentheses `(`, are simply pushed onto the `stack`.

5. **Forming the Result String**:
    - After processing all characters in the input string, the `stack` contains the transformed string.
    - The characters in the `stack` are joined together to form the final result string.

## Example
```typescript
const result = reverseParentheses("(abcd)");
// Expected Output: "dcba"

const result2 = reverseParentheses("(u(love)i)");
// Expected Output: "iloveu"
