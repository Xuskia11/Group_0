const userEmail = document.getElementById("user-email");
const userPassword = document.getElementById("user-password");


const email = document.getElementById("email");
const password = document.getElementById("password");

const form = document.querySelector("form")



form.addEventListener("submit",function(e){
    e.preventDefault();
    userEmail.textContent += email.value;
    userPassword.textContent += password.value;
});
    


add()
