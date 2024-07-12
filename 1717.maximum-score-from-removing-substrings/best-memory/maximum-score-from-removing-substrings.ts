/**
 * @param {string} S
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */
const maximumGain = (S: string, X: number, Y: number): number => {
  let len: number = S.length,
    ans: number = 0,
    a: string = "a",
    b: string = "b";
  if (Y > X) [a, b, X, Y] = [b, a, Y, X];
  let aStore: number = 0,
    bStore: number = 0;
  for (let i: number = 0, c: string = S[i]; i <= len; c = S[++i]) {
    if (c === a) aStore++;
    else if (c === b) {
      if (aStore) {
        ans += X;
        aStore--;
      } else bStore++;
    } else {
      ans += Y * Math.min(aStore, bStore);
      aStore = bStore = 0;
    }
  }
  return ans;
};
