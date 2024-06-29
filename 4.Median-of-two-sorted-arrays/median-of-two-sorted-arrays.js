/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  nums1.unshift(-Number.MAX_VALUE);
  nums2.unshift(-Number.MAX_VALUE);
  nums1.push(Number.MAX_VALUE);
  nums2.push(Number.MAX_VALUE);

  let p1 = Math.ceil((nums1.length + nums2.length) / 2);
  let l = 0;
  let r = nums1.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);

    let mid2 = p1 - mid - 2;
    if (nums1[mid] <= nums2[mid2 + 1] && nums1[mid + 1] >= nums2[mid2]) {
      if ((nums1.length + nums2.length) % 2 === 0) {
        return (
          (Math.min(nums1[mid + 1], nums2[mid2 + 1]) +
            Math.max(nums1[mid], nums2[mid2])) /
          2
        );
      } else {
        return Math.max(nums1[mid], nums2[mid2]);
      }
    } else if (nums1[mid + 1] < nums2[mid2]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
};
