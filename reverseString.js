let str = "this is a string which needs to be reveresed";
let start = 0;
let end = str.length-1;
let newArr = str.split('');
while(end>start){
    let temp = newArr[start];
    newArr[start]=newArr[end];
    newArr[end]=temp;
    start++;
    end--;
  } 
// console.log(newArr.join(""));

let newArr2 = str.split('').reverse().join('');
console.log(newArr2);

// //get position of an element
// let arr = [1, 3, 5, 7, 8, 9, 10];
// let find = 8;
// let start = 0;
// let end = arr.length-1;
// let position = '';

// function getPosition(){
//     while(start<=end){
//         let mid = Math.floor((start+end)/2)
//         if(arr[mid] === find){
//             position = mid
//             break;
//         }else if (arr[mid]<find){
//             start = mid + 1;
//         } else {
//             end = mid - 1;
//         }
//     }
// }
// getPosition();
// console.log(position);