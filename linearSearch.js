function linearSearch(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == find) {
      position = i;
      return i;
    }
  }
  if (!position) {
    alert("No such element is found!")
  }
}

let array = [2, 4, 1, 5, 7, 3]
let find = 1;
let position = undefined;
let a = linearSearch(array);
console.log("The position is: ", a);