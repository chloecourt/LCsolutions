// given two arrays of numbers in ascending order join and sort them from ascending order.

const mergeSortedArrays = (arr1, arr2) => {
  // check that inputs are valid
  if ((arr1.length === 0) & (arr2.length === 0)) return [];
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  // instantiate a new array
  const newArray = [];

  while (arr1[0] | arr2[0]) {
    // if arr1[0] is less than or equal to arr2[0]
    if ((arr1[0] <= arr2[0]) | (arr2[0] === undefined)) {
      //remove it and add it to newArray
      const removedElement = arr1.shift();
      newArray.push(removedElement);
    } else {
      // if arr2[0] does not exist (no more els in the array) keep removing from arr1
      if (arr2[0].length !== 0) {
        const removedElement = arr2.shift();
        newArray.push(removedElement);
      }
    }
  }
  return newArray;
};

console.log(
  "mergeSortedArrays: ",
  mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])
);
