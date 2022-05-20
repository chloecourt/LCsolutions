var twoSum = function(nums, target) {
  const cache = {}; // difference : index 
  // iterating in the array 
  for (let i=0; i < nums.length; i++) {
      if (cache[nums[i]] !== undefined) {
          return [cache[nums[i]],i]; 
      } else {
          cache[target-nums[i]] = i; 
      }
  }
};