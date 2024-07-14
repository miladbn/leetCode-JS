/**
 * @param {string} formula
 * @return {string}
 */

function countOfAtoms(formula) {
  let num = "",
    atoms = "";
  let st = [1];
  let d = new Map();
  for (let i = formula.length - 1; i >= 0; i--) {
    let ch = formula[i];
    if (ch >= "0" && ch <= "9") num = ch + num;
    else if (ch >= "a" && ch <= "z") atoms = ch + atoms;
    else if (ch >= "A" && ch <= "Z") {
      atoms = ch + atoms;
      d.set(
        atoms,
        (d.get(atoms) || 0) +
          st[st.length - 1] * (num === "" ? 1 : parseInt(num))
      );
      num = "";
      atoms = "";
    } else if (ch === ")") {
      st.push((num === "" ? 1 : parseInt(num)) * st[st.length - 1]);
      num = "";
    } else st.pop();
  }
  let keys = [...d.keys()];
  keys.sort();
  for (let k of keys) atoms += k + (d.get(k) == 1 ? "" : d.get(k));
  return atoms;
}
