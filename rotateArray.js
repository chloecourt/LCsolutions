var rotate = function(nums, k) {
  k = k % nums.length;
  const arr = [];
  for (let i=k; i > 0; i--) {
      arr.push(nums.pop()); 
  }
  return nums.splice(0,0,...arr.reverse()); 

};