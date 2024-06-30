# findMedianSortedArrays Function Explanation

The `findMedianSortedArrays` function finds the median of two sorted arrays. This is a well-known algorithm problem that requires an efficient solution to handle potentially large arrays.

## Function Signature

```typescript
const findMedianSortedArrays = (nums1: number[], nums2: number[]): number;
```


# Parameters
- **nums1**: A sorted array of numbers.
- **nums2**: Another sorted array of numbers.

# Returns
The median of the two sorted arrays.

# Detailed Explanation

## Initial Check and Swapping
Ensure `nums1` is the smaller array. If not, swap `nums1` and `nums2`.

```typescript
if (nums1.length > nums2.length) {
  [nums1, nums2] = [nums2, nums1];
}
```


## Padding the Arrays

Add `-Number.MAX_VALUE` at the beginning and `Number.MAX_VALUE` at the end of both arrays to handle edge cases seamlessly.

```typescript
nums1.unshift(-Number.MAX_VALUE);
nums2.unshift(-Number.MAX_VALUE);
nums1.push(Number.MAX_VALUE);
nums2.push(Number.MAX_VALUE);
```


## Binary Search Initialization
Initialize pointers for binary search.


``` typescript 
let p1 = Math.ceil((nums1.length + nums2.length) / 2);
let l = 0;
let r = nums1.length - 1;
```


## Binary Search Loop
Perform a binary search to find the correct partition.


``` typescript
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
```


## Return Statement
Return a default value to ensure the function always returns a number.


``` typescript
return 0;
```

# Edge Cases and Considerations

The function handles cases where arrays are empty by padding with extreme values. The binary search ensures an O(log(min(n, m))) time complexity, making it efficient for large inputs.
