// three types of twoSum
//1.)
var twoSum = function (nums, target) {
  const cache = {}; // difference : index
  // iterating in the array
  for (let i = 0; i < nums.length; i++) {
    if (cache[nums[i]] !== undefined) {
      return [cache[nums[i]], i];
    } else {
      cache[target - nums[i]] = i;
    }
  }
};

// find which numbers added together equal the target 9, assume the numbers are ordering in ascending order. Return the indices of the solution, if there is not one return -1.
// return indices --must keep track
// inputs are a target number and an array of negative or positive integers in ascending order
const arr1 = [-1, 5, 7, 10];
// const arr2 = [4, 6, 12, 30, 1];

// 2.)
const findSumForTarget = (target, arr) => {
  // create a cache to store the difference and indices
  const cache = {};
  // iterate through the array
  for (let i = 0; i < arr.length; i++) {
    // check the difference between the element and the target is in the cache
    const diff = target - arr[i];
    if (cache[diff] !== undefined) {
      // return indices if you find it in the cache
      return [i, cache[target - arr[i]]];
    }
    // if it is not in the cache, to store the element and its index --> so that if you look up the difference it will be equal to the element value
    cache[arr[i]] = i;
  }
  // if we are done iterating through the array return -1
  return -1;
};

/**CHECK ANSWER */

// console.log("findSumForTarget: should be true", findSumForTarget(9, arr1));
// console.log("findSumForTarget: should be -1", findSumForTarget(9, arr2));
/**************/

//3.)
// const arr1 = [-1, 5, 7, 10];
const twoSumIII = (target, arr) => {
  // set is faster time complexity than hash map
  const cache = new Set();
  for (let i = 0; i < arr.length; i++) {
    const diff = target - arr[i];
    // does the cache contain a number that added to current idexed number equals target?
    console.log("what cache.has(diff) : ", cache.has(diff));
    if (cache.has(diff)) {
      return true;
    }
    // if yes return
    cache.add(arr[i]);
  }
  // return false if none found
  return false;
};

/**CHECK ANSWER */

// console.log("twoSumIII: ", twoSumIII(9, arr1));
