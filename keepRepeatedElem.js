// let arr = [2,2,2,1,1,3,4,5,6,7,3,5,5];
// //remove the numbers which are non repeated

// let newArr = arr.filter((element, index)=>{
//   if(arr.indexOf(element) !== index && arr.lastIndexOf(element) === index){
//     return element;
//   }
// })
// console.log(newArr);


//Factorial of n number
// function factorial(n){
//   let result = 1;
//   for(i = 2; i<= n; i++){
//     result = result * i;
//   }
//   return result;
// }
// console.log(factorial(4));

//Find a number in a given array
// function recursiveBinarySearch(arr, target){
//   return search(arr, target, 0, arr.length -1)
// }

// function search(arr, target, leftIndex, rightIndex){
//   if(leftIndex > rightIndex){
//     return -1;
//   }
//   let middleIndex = Math.floor((leftIndex+rightIndex)/2)
//   if(target == arr[middleIndex]){
//     return middleIndex;
//   }
//   if(target < arr[middleIndex]){
//     return search(arr, target, leftIndex, middleIndex - 1);
//   } else {
//     return search(arr, target, middleIndex + 1, rightIndex)
//   }
// }

// console.log(recursiveBinarySearch([1, 3, 4, 6, 7, 9, 10, 13], 7))

//Bubble sort
// function bubbleSort(array){
//   for(let i = 0; i < array.length - 1; i++){
//     for(let j = 0; j < array.length - 1; j++){
//       if(arr[j]>arr[j+1]){
//         let temp = array[j];
//         array[j] = array[j+1];
//         array[j+1]=temp;
//       }
//     }
//   } console.log(array);
// }

//Insertion sort
// function insertionSort(arr) {
//   for (let i = 1; i < arr.length - 1; i++) {
//     let numberToInsert = arr[i];
//     console.log(numberToInsert);
//     let j = i - 1; //index of sorted element
//     while(j>=0 && arr[j] > numberToInsert){
//       arr[j+1] = arr[j]
//       j = j - 1;
//     }
//     arr[j+1] = numberToInsert;
//   }
  
// }

//Quick sorting

function quickSort(arr){
  //check if the array contains just two elements
  if(arr.length <= 2){
    return arr;
  }
  //Choose the pivot element, in our case it will be the last element from the array
  let pivot = arr[arr.length - 1];
  //Now define left and right empty array where we'll be pushing the elements while sorting
  let leftArr = [];
  let rightArr = [];
  //Now we are going to make iteration over the given array
  for(let i = 0; i < arr.length -1; i++){
    //We check if the pivot is greater than or less than the previous element
    if(arr[i] < pivot){
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i])
    }
  }
  //repeat this method while using recursion
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}

let arr = [8, 20, -2, 4, -6];

console.log(quickSort(arr));