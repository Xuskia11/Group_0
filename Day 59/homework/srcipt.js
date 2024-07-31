calculator = {
    add: function(num1,num2){
        return num1 + num2
    },
    minus: function(num1,num2){
        return num1 - num2
    },
    devide: function(num1,num2){
        return num1 / num2
    },
    multiple: function(num1,num2){
        return num1 * num2
    }
}

console.log(calculator.add(2,3))
console.log(calculator.minus(2,3))
console.log(calculator.devide(2,3))
console.log(calculator.multiple(2,3))



function Calculators(number1,number2,sign){
    if (sign === "+"){
        return Number(number1) + Number(number2)
    } else if (sign === "-") {
        return Number(number1) - Number(number2)
    } else if (sign === "*"){
        return Number(number1) * Number(number2)
    } else {
        return Number(number1) / Number(number2)
    }
}

console.log(Calculators(prompt("Enter first number here: "),prompt("Enter second number here: "), prompt("Enter mathematical sign here: ")))
