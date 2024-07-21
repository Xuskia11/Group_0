const car = {
    model: "Mercedes",
    speed: "180KM/H",
    Engine: "V8 bi-turbo",
    Date: "2018"
}
const carDesign = {
    color: "red",
    spoiler: "wide",
    wheel: "sport"
}

console.log(car)
console.log(car.model)
console.log(carDesign)
console.log(carDesign.wheel)





const engine = {
  cylinderLiner: "New",
  valve: "Old",
};
const carObj = {
  color: "Black",
  model: "Mercedes",
  engine,
  myFunc: function () {
    console.log(carObj.engine);
  },

};

carObj.myFunc()


for(let i = 0; i < 5; i++){
    console.log(i)
}
