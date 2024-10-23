let str = 'ram is a good boy'
let arr = new Array(str);

let newArr = arr.map((el) => {
    let elValue = Object.values(el);
    return elValue;
})

let anotherArr = newArr.flat();
let newArr1 = []
for (let i = 0; i < anotherArr.length; i++) {
    newArr1.push(anotherArr[i].charCodeAt(Object.keys(i)));
}
for (let i = 0; i < newArr1.length; i++) {
    for (let j = 0; j < newArr1.length; j++) {
        if (newArr1[j] > newArr1[j + 1]) {
            let temp = newArr1[j];
            newArr1[j] = newArr1[j + 1];
            newArr1[j + 1] = temp;
        }
    }
}
str = String.fromCharCode(...newArr1);
console.log(str);
