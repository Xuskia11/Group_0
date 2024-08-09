const p = document.getElementsByClassName("para"); 
const btn = document.getElementById("btn");


btn.addEventListener("click",() => {
    for(let i = 0;i < p.length; i++){
        p[i].textContent = Math.floor(Math.random() * 10);
    }
        
})
