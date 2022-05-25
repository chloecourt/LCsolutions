var reverseWords = function(s) {
  let left = 0;
  let right = 0; 
  let final = ''
  let index= 0; 
  while(right < s.length) {  
    // if right is at ' '
    if (s[right] === ' ') { 
      // save index for next word 
      index = ++right;
      // right needs to begin at last letter of word
      right = right -1; 
      // left < right 
      while (left <= right) {
        final += s[right--]; 
        
      }
      left = index; 
      right = index; 
      // if (s.length !== final.length) {
      //   final+=' '; 
      // }
    }
     right++; 
  }
  right--; 
  final+=' ';
  while(right >= left) {
    final+= s[right--];
  }
  return final; 
};
                      // L     RI
console.log(reverseWords("Let's take LeetCode contest"));