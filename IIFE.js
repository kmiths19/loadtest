let p = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Mithun")
    }, 3000)
  })
}
//Immediately Invoked Function Expression
(async () => {
  let a = await p();
  console.log(a)
  let b = await p();
  console.log(b)
  let c = await p();
  console.log(c)
})()

