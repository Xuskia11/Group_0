const image = document.getElementById("image")
const you = document.getElementById("You")
const computer = document.getElementById("Computer")
const button = document.getElementById("butto")

const computer_score = document.getElementById("computer_score")
const your_score = document.getElementById("your_score");
const result = document.getElementById("result")



let number1 = 0
let number2 = 0

let score = 0
let score2 = 0
function roll(){
    image.addEventListener("click",function(){
        number1 = Math.floor(Math.random() * 6) + 1;
        number2 = Math.floor(Math.random() * 6) + 1;
    

        computer.textContent = "computer: " + number1
        you.textContent = "You: " + number2
        
        if(number1 > number2){
            score++
            computer_score.textContent = "Computer_score: " + score
            result.textContent = "You Lost!!!";

        
        } else if(number2 > number1){
            score2++
            your_score.textContent = "Your_score: " + score2;
            result.textContent = "You Won!!!";
        }else if(number2 === number1){
            result.textContent = "Tie!!!";
        }

    });
    button.addEventListener("click",function(){
        number1 = 0;
        number2 = 0;
        score = 0;
        score2 = 0;
        computer.textContent = "computer: " + number1;
        you.textContent = "You: " + number2;
        computer_score.textContent = "Computer_score: " + score;
        your_score.textContent = "Your_score: " + score2;
        result.textContent = ""

    })
};
roll()


