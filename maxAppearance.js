function maxAppear(array) {
    let freqObj = {};
    let maxKey = 0;
    for (let i = 0; i < array.length; i++) {
        let key = array[i];
        if (!freqObj[key]) {
            freqObj[key] = 0;
        }
        freqObj[key]++;
        if (maxKey == '' || freqObj[key] > freqObj[maxKey]) {
            maxKey = key;
        }
    }
    return maxKey;
}

let array = [1, 3, 5, 6, 7, 8, 1, 1, 3, 4, 2, 3, 3, 6];

console.log(maxAppear(array));