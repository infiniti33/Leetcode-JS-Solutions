/**
 * 
 * Given an array of integers and an integer k,
 * you need to find the total number of continuous subarrays whose sum equals to k.
 * Example 1:
 * Input:nums = [1,1,1], k = 2
 * Output: 2
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Time Complexity: O(n)
// Space Complexity: O(n)
const subarraySum = (nums, k) => {
  let sum = 0, count = 0;
  const hashMap = { 0: 1 };

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (hashMap[sum - k]) {
      count += hashMap[sum - k];
    }
    hashMap[sum] = (hashMap[sum] || 0) + 1;
  }
  return count;
};
