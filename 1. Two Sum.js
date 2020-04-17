
/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * Example:
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1]
 */

// Time Complexity: O(n)
// Space Complexity: O(n)
const twoSum = (nums, target) => {
  const complements = {};
  const indices = [];

  for (let i = 0; i < nums.length; i++) {
    const complement = (target - nums[i]);
    complements[complement] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    if (complements[nums[i]] && complements[nums[i]] !== i) {
      indices.push(complements[nums[i]]);
      indices.push(i);
      break;
    }
  }

  return indices;
};

// Time Complexity: O(n)
// Space Complexity: O(n)
const twoSumMap = (nums, target) => {
  const complements = new Map();
  const indices = [];

  for (let i = 0; i < nums.length; i++) {
    const complement = (target - nums[i]);
    complements.set(complement, i);
  }

  for (let i = 0; i < nums.length; i++) {
    const mapVal = complements.get(nums[i]);
    if (mapVal !== undefined && mapVal !== i) {
      indices.push(mapVal);
      indices.push(i);
      break;
    }
  }

  return indices;
};
