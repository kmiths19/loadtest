let arr = [1, 2, 3, 6, 4, 5];

let arr2 = arr.reduce((value1, value2)=>{
    return value1 + value2;
})

console.log(arr2);

let arr3 = arr.map((value, index, array)=>{
  console.log(value, index, array);
  return value*2;
})
console.log(arr3);

let arr4 = arr.filter((number)=>{
  //You can write any condition here for the operation
  if(number == 5){
    console.log("Number exists in the array");
    return arr[number];
  }
})
console.log(arr4);

