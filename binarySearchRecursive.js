function binarySearchRecursive(data, start, end){
   let mid = Math.floor((start+end)/2);
  if (data[mid]===find){
    position = mid;
    return true;
  } else if(data[mid]<find){
    binarySearchRecursive(data, mid+1, end);
  } else {
    binarySearchRecursive(data, start, mid-1);
  }
}
let data = [1, 4, 5, 6, 7, 9, 10];
let find = 5;
let start = 0;
let end = data.length -1;
let position = '';
binarySearchRecursive(data, start, end);
console.log(position);