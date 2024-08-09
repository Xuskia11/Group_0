const div = document.getElementById("div");
const link = document.getElementById("link");
const btn = document.getElementById("btn")



btn.addEventListener("click", () => {
    link.href = "https://www.sololearn.com/en/learn/courses/javascript-intermediate";
    div.style.backgroundColor = "yellow"
})