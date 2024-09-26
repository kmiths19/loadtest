let arr = [2,2,2,1,1,3,4,5,6,7,3,5,5];
//remove the numbers which are non repeated

let newArr = arr.filter((element, index)=>{
  if(arr.indexOf(element) !== index && arr.lastIndexOf(element) === index){
    return element;
  }
})
console.log(newArr);