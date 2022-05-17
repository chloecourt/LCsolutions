
/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
*/



var searchInsert = function(nums, target, left=0, right= nums.length-1) {
if (target < nums[0] ) return 0;
if (target > nums[nums.length-1]) return nums.length; 
  const mid = Math.floor((right + left) /2); 
if (target === nums[mid]) return mid; 
if (right - left === 1) return right; 
if (target > nums[mid]) {
    left = mid; 
} else {
    right = mid; 
}
    return searchInsert(nums, target, left, right)
};

