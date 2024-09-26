function customReverse(array, start, end) {
            if (start <= end) {
                let temp = array[start];
                array[start] = array[end];
                array[end] = temp;
               return customReverse(array, start + 1, end - 1);
            }
        }
let array = [1, 3, 5, 7, 9, 10, 8, 10, 23, 45, 46, 245];
        customReverse(array, 0, array.length - 1);
        console.log("Reversed Array: ",array);