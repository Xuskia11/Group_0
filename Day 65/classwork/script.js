// const array = [1,23,34,5,6,7,8,90,4,3141]

// for(let i = 0;i < array.length;i++){
//     if(array[i] % 2 === 0){
//         console.log(array[i] + " is Even" + " " + "and index is" + " " +  i)
//     } else {
//         console.log(array[i] + " is odd" + " " + "and index is" + " " + i)
//     }
// }

// const array2 = [1,23,34,5,6,7,8,90,4,3141]
// const evenArray = []
// const oddArray = []

// for(let i = 0;i < array2.length;i++){
//     if(array[i] % 2 === 0){
//         evenArray.push(array[i])
//     } else {
//         oddArray.push(array[i])
//     }
// }

// console.log(evenArray + " " +  "This array of even numbers.")
// console.log(oddArray + " " +  "This array of odd numbers.")



// const array = []

// let count = 0

// for(let i = 0;i <= 100; i++){
//     if(i % 5 === 0){
//         array.push(i)
//         count += i
//     } 
// }
// console.log(array)
// console.log(count)



// let sums = 0
// let mult = 1
// const arr1 = []
// const sqrtArray = []

// for(let i = 0; i <= 10;i ++){
//     input = Number(prompt("Enter number here: "))
//     sums += input
//     mult *= input
//     arr1.push(input ** 2)
//     sqrtArray.push(Math.sqrt(input))
// }

// console.log(sums)
// console.log(mult)
// console.log(arr1)
// console.log(sqrtArray)


input = Number(prompt("How many tickects you want to buy?: "))

const array = []

const Object = function(name,lastname,age,id){
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.id = id;
}

for(let i = 0;i < input; i++){
    nameInput = prompt("Enter your name here: ")
    lastnameInput = prompt("Enter your lastname here: ")
    ageInput = prompt("Enter you age here: ")
    idRandom = Math.floor(Math.random() * 50)

    const tickectsObject = new Object(nameInput,lastnameInput,ageInput,idRandom)


    array.push(tickectsObject)
}

console.log(array)

