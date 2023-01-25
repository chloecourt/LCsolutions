var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;
  function helper(s, left, right) {
    if (left === right || left > right) return s;
    const temp = s[left]; //'h'
    s[left] = s[right]; //
    s[right] = temp;
    return helper(s, ++left, --right);
  }
  return helper(s, left, right);
};

console.log(reverseString(["h", "e", "l", "l", "o"]));

const intro = "Hello, my name is Samantha.";
const reverseStringII = (str) => {
  let newStr = ""; // O (1) space complexity
  for (let i = str.length - 1; i >= 0; i--) {
    // O (n) time complexity
    newStr += str[i]; // space complexity O (n)
  }
  return newStr;
};

console.log("reversedStringII: ", reverseStringII(intro));
