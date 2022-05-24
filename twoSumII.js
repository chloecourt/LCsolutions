var twoSum = function(numbers, target) {
  const cache = {}; 
for (let i=0; i < numbers.length; i++) {
  if (cache[numbers[i]] !== undefined) {
      return [cache[numbers[i]]+1, i+1];
  } else {
      cache[target-numbers[i]] = i;
  }
}
}

console.log(twoSum([2,7,11,15],9));
