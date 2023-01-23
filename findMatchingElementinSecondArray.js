// you are given two arrays, return true if the arrays have a matching primitive

// brute force option which is to create a nested for loop that checks if there are any pairs
// this would have the time complexity of O(a*b) since we do not know the size of each input
// thsi is quadratic time so ideally would would want to get this down to linear or O(log(n))

const findMatchingPrimitive = (array1, array2) => {
  const cache = {};
  array1.map((el) => (cache[el] = true));

  for (let i = 0; i < array2.length; i++) {
    if (cache[array2[i]]) return true;
  }
  return false;
};

//second solution
const findMatchingPrimitiveII = (array1, array2) => {
  return array1.some((el) => array2.includes(el));
};

console.log(
  "findMatchingPrimitive: ",
  findMatchingPrimitive(
    [12, 34, 14, "a", "cookie"],
    ["turtle", "orange", 98, 22, 12]
  )
);

console.log(
  "findMatchingPrimitiveII: should be false ",
  findMatchingPrimitive(
    [12, 34, 14, "a", "cookie"],
    ["turtle", "orange", 98, 22, 13]
  )
);
