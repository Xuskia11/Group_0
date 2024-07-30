const username  = document.getElementById("username")
const gmail = document.getElementById("gmail")
const password = document.getElementById("password")
const submit = document.getElementById("submit")

submit.addEventListener("click",function(e){
    e.preventDefault()    
    const base = new Register(gmail.value,password.value)
    console.log(base)

    
    const element = document.createElement("p")
    const userShow = document.createTextNode("This is your username:" + " " + username.value)
    const breakLIne1 = document.createElement("br")
    const gmailShow = document.createTextNode("This is you Gmail:" + " " + gmail.value)
    const breakLIne2 = document.createElement("br")
    const passwordShow = document.createTextNode("\nThis is your password:" + " " + password.value )  
    element.appendChild(userShow)
    element.appendChild(breakLIne1)
    element.appendChild(gmailShow)
    element.appendChild(breakLIne2)
    element.appendChild(passwordShow)
    document.body.appendChild(element);
})



function Register(username,gmails,password){
    this.username = username
    this.gmails = gmails
    this.password = password
}




