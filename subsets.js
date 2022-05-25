/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
  const results = [];
      
  const helper = (arr, ans=[])=> {
      if (arr.length === 0) return results.push(ans);
      helper(arr.slice(1),[...ans,arr[0]])
      helper(arr.slice(1),ans)
  };
  helper(nums);
      return results; 
  };

  /*
https://leetcode.com/problems/subsets/
  */