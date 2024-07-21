const balance = document.getElementById("balance")
const number = document.getElementById("number")
const deposit = document.getElementById("deposit")
const withdraw = document.getElementById("withdraw")

console.log(balance.textContent)

let num = 0
deposit.addEventListener("click",function(){
    num += Number(number.value);
    balance.textContent = num;
});
withdraw.addEventListener("click",function(){
    if(balance.textContent > 0){
        num -= Number(number.value)
        balance.textContent = num;
    }else{
        alert("Enough Money!!!")
    }
    
});

