const arr1 = [1, 2, 9, 0, 9, 4, 1, 1, 2];
const arr2 = [12345];

//find the first repeat number and return it. If there is not one, return undefined

const firstRepeatNum = (arr) => {
  const cache = {};
  for (let i = 0; i < arr.length; i++) {
    if (cache[arr[i]] === undefined) {
      cache[arr[i]] = 1;
    } else {
      return arr[i];
    }
  }
  return undefined;
};

console.log(firstRepeatNum(arr1));
console.log(firstRepeatNum(arr2));
