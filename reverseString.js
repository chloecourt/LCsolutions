var reverseString = function(s) {
  let left = 0
  let right = s.length-1;  
  function helper(s,left,right) {
      if (left === right || left > right ) return s; 
      const temp = s[left]; //'h'
      s[left] = s[right];//
      s[right] = temp; 
      return helper(s, ++left, --right);
  } 
 return helper(s,left,right);

}

  console.log(reverseString(["h","e","l","l","o"]))