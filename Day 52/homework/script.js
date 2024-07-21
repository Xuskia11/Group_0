const me = {
    name: "atuka",
    surname: "khuskivadze",
    age: "15"
}
const engine = {
    car : "Mercedes",
    turbo: "v8",
    carDesign: "red"
}


const car = {
    model: "BMW",
    engines: "V10",
    design: "Yellow",
    me,
    engine,
    myFuntion: function(){
        console.log("Owner and car")
        console.log(car.me)
        console.log(car.engine)
    }

}

car.myFuntion()


let username = document.getElementById("username");
let surname = document.getElementById("surname");
let age = document.getElementById("Age");
let submit = document.getElementById("btn");


submit.addEventListener("click",function(){
    
    const info = {
      username: username.value,
      surname: surname.value,
      age: age.value,
    };
    console.log(info)
});