let str = 'helloo';
let strObj = {};
let maxKey = '';

function repeatedLetter()
{
  for(let i=0; i<str.length; i++){
  // console.log(str[i]);
  let key = str[i];
  if(!strObj[key]){
    strObj[key] = 0;
  }
  strObj[key]++;
  // console.log(strObj[key]);
  if(maxKey == '' || strObj[key]> strObj[maxKey]){
    maxKey = key;
  }
}
}
repeatedLetter();
console.log("Maximum repeated letter is: ",maxKey, strObj);