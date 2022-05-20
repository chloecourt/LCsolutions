//[-4,-1,0,3,10]

var sortedSquares = function(nums) {
  // 
  const final = [(nums[0]**2)]
  for (let i=1; i < nums.length; i++) {
    const x = nums[i]**2;
    if (final[final.length-1] <= x) {
        final.push(x);
    }
    if (final[final.length-1] > x) {
      let L = final.length-1; 
      while (L >=0) {
        if (x > final[L-1] ) {
          final.splice(L-1,0,x);
          break;
        }
        L--;
      }
      if (final[0] > x) {
        final.splice(0,0,x);
      }
  }

}
return final; 


};
 


 console.log(sortedSquares([-4,-1,0,3,10]))


// var sortedSquares = function(nums) {
    
//   // create an array with one element in it squared
//   const final = [(nums[0])**2]
//   console.log(final);
// // iterate through array 
  
//   for (let i=1; i < nums.length; i++) {
//       let n = (nums[i])**2;
//       console.log(n)
// // check to see if nums[i] is greater than first element in final
      
//   if (n > final[final.length-1]) {
// // if so put at the end of final array
//   final.push(n);
//   } else {
//       if (final[0] > n ) {
//       final.splice(0,0,n);
//   }
      
// // if nums[i]**2 is less than the last element in final 
//       for (let x=final.length-1; x >= 0; x--) {
//           if ( n > final[x] ) {
//               final.splice(x,0,n);
//           }
//   }
  
//   }
  
// }
//   return final; 
//  }

