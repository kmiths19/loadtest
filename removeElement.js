function outer(name){
    let a = "Hi";
    function greet () {
        console.log (a + " " + name + " you are welcome!")
    }
    return greet;
}

let welcome = outer("Mithun");
console.log(welcome());