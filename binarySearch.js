
const search = function(nums, target) {
// create helper function for scoping purposes
const helper = (nums, target)=> {
  // create mid variable
  const mid = Math.floor(nums.length/2);
  // base case if target equivalent to nums[mid] return element***
  if (target === nums[mid]) return nums[mid];
  // if target is not in the array break 
  if (nums.length === 1) return nums[0];
  // if target greater return helper discard rest of the array 
  if (target > nums[mid]) return helper(nums.slice(mid+1),target);
  // if target is less than mid discard half of array 
  if (target < nums[mid]) return helper(nums.slice(0,mid), target);
}
const answer = helper(nums,target);
return answer === target ? nums.indexOf(answer) : -1; 
 
};

console.log(search([-1,0,3,5,9,12],9));