//Insert and element at a position of your choice

function insertItem(position, count, element){
  for (let i= array.length -1; i>=0; i--){
            if(i>=position){
                array[i+1] = array[i];
                if (i == position) {
                    array[i] = element;
                }
            } 
        }
}
let array = [1, 3, 5, 7, 8, 10, 23, 45, 46, 245];
insertItem(3, 0, 95);
console.log(array);