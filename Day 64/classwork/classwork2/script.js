const form = document.getElementById("form")


const account = []

const Account = function(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}


form.addEventListener("submit",function(e){
    e.preventDefault()

    const usernameValue = form.elements.username.value;
    const emailValue = form.elements.email.value;
    const passwordValue = form.elements.password.value;
    const reaptedPasswordValue = form.elements.reapetedPassword.value;

    const acc = new Account(usernameValue,emailValue,passwordValue)

    if(passwordValue !== reaptedPasswordValue){
        form.elements.reapetedPassword.style.borderColor = "red"
        const p = document.createElement("p")
        const content = document.createTextNode("Your password don't match,Try again!!!")

        p.appendChild(content)
        document.body.appendChild(p)
    } else {
        form.elements.reapetedPassword.style.borderColor = "lime";
        form.elements.username.style.borderColor = "lime";
        form.elements.password.style.borderColor = "lime";
        form.elements.email.style.borderColor = "lime";
        
        account.push(acc)
        console.log(account)

        const p = document.createElement("p")
        const content = document.createTextNode("You successfully logged in!!!")

        p.appendChild(content)
        document.body.appendChild(p)
    }

    
})