/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function (S, X, Y) {
  let len = S.length,
    ans = 0,
    a = "a",
    b = "b";
  if (Y > X) [a, b, X, Y] = [b, a, Y, X];
  let aStore = 0,
    bStore = 0;
  for (let i = 0, c = S[i]; i <= len; c = S[++i])
    if (c === a) aStore++;
    else if (c === b)
      if (aStore) (ans += X), aStore--;
      else bStore++;
    else (ans += Y * Math.min(aStore, bStore)), (aStore = bStore = 0);
  return ans;
};
