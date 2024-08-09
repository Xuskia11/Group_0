// 1    
// setInterval(function(){
//     const date = new Date()
//     console.log(date.toString())
// }, 1000)


// 2
// function CircleRadius(radius){
//     return Math.floor(Math.PI * radius ** 2)
// }

// console.log(CircleRadius(8))



// 3
// function KebabCase(string){
//     string = string.split(" ")
//     return string.join("-")
// }
// console.log(KebabCase("Hello world"))


// 4
// let seconds = 0;
// let minutes = 0;

// const targetTimer = setInterval(() => {
//     seconds ++
//     if(seconds === 60){
//         minutes ++
//         seconds = 0
//     }
//     if(minutes === 3 && seconds === 15){
//         clearInterval(targetTimer)
//         setTimeout(() => {
//             console.log("Done!!!")
//         },2000)
//     }
//     console.log(`${minutes}:${seconds}`)
// },1000)






// 5

// function day(){
//     let d = new Date()
//     const obj = {
//         1: "Monday",
//         2: "Tuesday",
//         3: "Wednesday",
//         4: "Thursday",
//         5: "Friday",
//         6: "Saturday",
//         7: "Sunday"
//     }
    // let num = d.getDay()
    
//     return obj[num]
// }

// console.log(day())


