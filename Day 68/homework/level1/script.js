const div = document.getElementById("div")
const p = document.getElementById("para")
const button = document.getElementById("btn")


let count = 0

button.addEventListener("click", () => {
    count ++;
    p.innerHTML = count;
    div.style.backgroundColor = "red";
    p.style.color = "lime";
})

