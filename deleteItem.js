function deleteArray() {
    let array = [1, 3, 5, 7, 9, 10, 8, 10, 23, 45, 46, 245]
  //delete an element from the array at 3rd position
  // let element = document.getElementById("input").value;
  // element = parseInt(element);
    console.log("Old Array: ",array);
    // let position = document.getElementById("new").value;
    // position = parseInt(position);
  let position = 3;
      for (let i = position; i < array.length -1 ; i++) {
                array[i] = array[i+1];
        } 
        array.length = array.length - 1;
        console.log("New Array: ",array);
    }
deleteArray();