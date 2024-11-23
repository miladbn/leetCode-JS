function rotateTheBox(box) {
  const m = box.length;
  const n = box[0].length;
  const getGravity = (ox) => {
    const arr = ox.join("").split("*");
    for (let i = 0; i < arr.length; i++) {
      let res = "";
      let temp = arr[i].split("");
      if (temp.length <= 1) continue;
      let cnt1 = 0;
      let cnt2 = 0;
      for (let j = 0; j < temp.length; j++) {
        if (temp[j] == "#") {
          cnt1++;
        } else if (temp[j] == ".") {
          cnt2++;
        }
      }
      for (let j = 0; j < cnt2; j++) {
        res += ".";
      }
      for (let j = 0; j < cnt1; j++) {
        res += "#";
      }
      arr[i] = res;
    }
    return arr.join("*");
  };

  const rotatedBox = Array.from({ length: n }, () => Array(m).fill("."));

  for (let i = 0; i < box.length; i++) {
    box[i] = getGravity(box[i]);
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      rotatedBox[j][m - i - 1] = box[i][j];
    }
  }
  return rotatedBox;
}
