const same = (arr1,arr2)=> {
const cache = {}; 
for (let i=0; i < arr1.length; i++) {
  if (cache[(arr1[i])**2] === undefined) {
    cache[(arr1[i])**2] = arr1[i]; 
  } 
}

for (let i=0; i < arr2.length; i++) { 
  if (cache[arr2[i]] !== undefined) { 
    delete cache[arr2[i]]   
  } else {
    return false; 
  }

}
return Object.keys(cache).length ? false : true;   
};

console.log(same([1,2,3],[4,1,9]))
console.log(same([1,2,3],[1,9]))
console.log(same([1,2,1],[4,4,1]))

