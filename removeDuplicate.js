function removeDuplicate(arr) {
                return arr.filter((value, index) => arr.indexOf(value) === index);
            }

function remove(){
     let arr = ['a', 'a', 'b', 'c', 'd', 'e', 'f', 'e', 'g'];
            console.log("Actual Array: ", arr);
            let unique = removeDuplicate(arr);
                console.log("Unique Array: ",unique);
    }
remove();

//manually remove the duplicates from an array
function removeDup(){
  for(let i=0;i<arr.length;i++){
    for (let j=i+1; j<arr.length; j++){
      if(arr[i]===arr[j]){
        arr.splice(j,1);
        j--;
      }
    }
  }
}