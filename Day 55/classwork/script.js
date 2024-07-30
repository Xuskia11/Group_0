let number = 5
let number2 = 10

if(number < number2 && number > 9){
    console.log("number2 is leading")
} else if(number > number2){
    console.log("number1 is laeding")
} else if (number === number2){
    console.log("Those numbers are equeal")
} else {
    console.log("Those numbers are useless")
};


for(let i = 0;i < 5; i++){
    console.log(i);
};



const lists = [1,2,3,4,5,6,7];

for(const i of lists){  
    if(i % 2 === 0){
        console.log(i + " " + "This number is even");

    } else {
        console.log(i + " " + "This number is odd");
    }
};

let number5 = 200;
while(number5 !== 0){
    number5--;
    console.log(number5);
}

for(let i = 0;i < 1000;i++){
    console.log(i)
    console.log("I love erekle")

}