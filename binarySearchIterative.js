let data = [1, 3, 5, 6, 7, 8];
let find = 6;
let start = 0;
let end = data.length -1;
let position = '';

function binarySearchIterative(){
  while(start<=end){
  let mid = Math.floor((start+end)/2);
  if(data[mid]===find){
    position = mid;
    break;
  } else if(data[mid]<find){
    start = mid+1;     
  } else {
    end = mid-1;
  }
}}
binarySearchIterative();
console.log(position);