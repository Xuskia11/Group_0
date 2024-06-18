let num = Number(prompt("Enter random number here: "));
let num2 = Number(prompt("Enter second random number here: "));
const p1 = document.getElementById("p1")
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const p4 = document.getElementById("p4");


console.log(num + num2);
console.log(num - num2);
console.log(num * num2);
console.log(num / num2);

p1.textContent=p1.textContent + " " + (num + num2)
p2.textContent = p2.textContent + " " + (num - num2);
p3.textContent = p3.textContent + " " + (num * num2);
p4.textContent = p4.textContent + " " + (num / num2);
