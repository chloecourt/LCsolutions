var reverseWords = function(s) {
  let left = 0;
  let right = 0; 
  let final = ''
  let index;
  while(right !== s.length) {
    if (s[right] === ' ') { 
      index = s[++right];
      right = right -1; 
      while (left < right) {
        final += s[right--]; 
      }
      left = index; 
      right = index; 
      if (s[s.length-1] !== final[final.length-1]) {
        final+=' '; 
      }
    }
     right++; 
  }
  return final; 
};

console.log(reverseWords("Let's take LeetCode contest"));