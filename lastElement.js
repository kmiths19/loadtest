function getLastRemainingIndex(array) {
  // Base case: if the array has only one element, return 0
  if (array.length === 1) {
    return 0;
  }
  
  // Remove the first and last elements from the array
  array.shift();
  array.pop();
  
  // Recursively call getLastRemainingIndex on the new array
  return getLastRemainingIndex(array);
}

const array = [1, 2, 3, 4, 5];
const lastRemainingIndex = getLastRemainingIndex(array);
console.log(array);

console.log("Index of the element is: ",lastRemainingIndex); 