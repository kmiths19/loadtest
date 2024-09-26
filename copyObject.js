object = {
  name: "Mithun",
  age: 34,
  address:{
    city: "Bangalore",
    state: "Karnataka",
    country: "India"
  }
}
// console.log("1st Line: ",object);

//shallow copy example below
// let newUser = Object.assign({}, object);
//deep copy example
// let newUser = JSON.parse(JSON.stringify(object));
//shallow copy example with spread operator
// let newUser = {...object};

// console.log("2nd Line: ",newUser);
newUser.name = "George";
newUser.age = 35;
newUser.address.country = "USA";
newUser.address.city = "New Hollywood";
newUser.address.state = "California";

console.log("3rd Line: ",object);
console.log("4th Line: ",newUser);


