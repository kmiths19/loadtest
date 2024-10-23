function rotateArray(array, rotations) {
    let result = [];
    // Calculate the effective number of rotations
    rotations = rotations % array.length;
    console.log(rotations)

    // Fill the rotated part of the array
    for (let i = 0; i < array.length; i++) {
        // Calculate the new position for each element after rotation
        let newIndex = (i + rotations) % array.length;
        result[i] = array[newIndex];
    }

    return result;
}

let arr = [1, 2, 3, 4, 5];
console.log(rotateArray(arr, 3));