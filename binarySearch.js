
/*
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
*/

var search = function(nums, target) {
  // create left = 0 index and right pointers = length-1
      let left =0; 
      let right = nums.length-1 
       // 2 
  // create a while loop to iterate through arr, while loop condition should be when left is greater than right pointer exist loop
      while(left <= right) { //left =0, right = 5
        let mid = Math.floor( (right + left)/ 2);
       // see if middle index is equal to target and return middle index
          if (nums[mid] === target) return mid; //
          // if greater adjust left pointer to middle 
          if (target > nums[mid] ) left = mid + 1;
          console.log('mid ', mid);
          console.log('right pointer', right); 
      // if less than adjust right pointer to middle 
          if (target < nums[mid]) right = mid -1;
      }
     
      return -1; 
      
  };

console.log(search([-1,0,3,5,9,12],9));

