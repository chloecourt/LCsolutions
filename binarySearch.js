
const search = function(nums, target) {
// create helper function for scoping purposes (do not want to alter nums array to find final index)
const helper = (nums, target)=> {
  // create mid variable -- every time new recursive call new mid
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
// call helper function to get answer whether target is the same or if theres only one element left
const answer = helper(nums,target);
return answer === target ? nums.indexOf(answer) : -1; // check to see whether there is an index or else return -1
 
};

console.log(search([-1,0,3,5,9,12],9));