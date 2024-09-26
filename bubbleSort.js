//sort the array in a series

function bubbleSort(arr){
  for (let i=0; i< arr.length; i++){
    for (let j=0; j<arr.length; j++){
      if(arr[j] > arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }console.log(arr)
}

let arr = [9, 2, 6, 7, 1, 0, 10];
bubbleSort(arr);