function numbers(){
    let num1 = Number(prompt("Enter number here"));
    let num2 = Number(prompt("Enter number here"));
    alert("equel =" + String(num1 + num2))
};

numbers()


const p = document.getElementById("paragraph");
const buttons = document.getElementById("button");
const buttons2 = document.getElementById("button2");


function change(){
    buttons.addEventListener("click",function(){
        p.textContent = "Hello visitors";
        p.style.fontSize = "40px";
        p.style.color = "green";
    buttons2.addEventListener("click",function(){
        p.textContent = "Hello world";
        p.style.fontSize = "16px";
        p.style.color = "red";

    });

    });
};

change()

