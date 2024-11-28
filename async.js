// console.log("start Exc..");
// setTimeout(() =>{
//     console.log("logic Exc..");
// },[3000])
// console.log("complete Exc..")

let a = 10;
let b = 20;

// setTimeout(() =>{
//     b = 40
// },[2000])

let waitingData = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve(40)
    })
},[3000]);

waitingData.then((data) =>{
    console.log(a+data)
})

console.log(a+b)