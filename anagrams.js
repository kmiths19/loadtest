function anagrams(s, t) {
    if (sortedArr1.length === sortedArr2.length && sortedArr1.join('') == sortedArr2.join('')) {
        return true;
    }
    return false;
}

let s = 'rat';
let t = 'tar';

//Find if s and t are anagrams of each other

let arr1 = new Array(s);
// console.log(s);
let arr2 = new Array(t);
// console.log(t);

let newArr1 = arr1.map((el) => {
    return Object.values(el);
});
let sortedArr1 = (newArr1.flat()).sort();
// console.log(sortedArr1.join(''));

let newArr2 = arr2.map((el) => {
    return Object.values(el);
});
let sortedArr2 = (newArr2.flat()).sort();
// console.log(sortedArr2.join(''));

// console.log(anagrams(sortedArr1, sortedArr2));

console.log(anagrams(sortedArr1, sortedArr2));

// Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

// Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]

// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

function groupAnagrams(strs) {
    let map = new Map();
    for (let str of strs) {

        let key = [...str].sort().join('');

        if (!map.has(key)) {
            map.set(key, []);
        }

        map.get(key).push(str);
    }
    return Array.from(map.values());
}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(strs);
console.log(result);