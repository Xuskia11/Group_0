const p = document.getElementById("number");
const button = document.getElementById("button1");
const button1 = document.getElementById("button2")

let number2 = 0;

button.addEventListener("click",function(){
    number2 += 1
    p.textContent = number2
    console.log(number2)

})
button1.addEventListener("click",function(){
    number2 = 0
    p.textContent = number2
})

