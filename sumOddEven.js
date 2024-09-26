let arr = [3, 2, 5, 6, 8, 11, 9];

//find the difference between sum of odd and even numbers
let sumEven = 0;
let sumOdd = 0;

for(let i=0; i<arr.length; i++){
  if((arr[i]%2) === 0){
    sumEven += arr[i] ;
  } else {
    sumOdd += arr[i];
  }
}
let difference = sumOdd - sumEven;
console.log(difference);