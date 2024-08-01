function Info(name){
    this.name = name
};

const names = ["data","atuka","atuka","andria"]
const lists = []

for(let i = 0;i < names.length;i ++){
    lists.push(new Info(names[i]))
}
console.log(lists)

listn = []
for(const i of names){
    listn.push(i)
}
console.log(listn)



function Names(word,word2){
    this.word = word
    this.word2 = word2
};

const userNames = new Names("atuka","erekle")
console.log(userNames)
console.log(userNames.word)
console.log(userNames.word2)




const info = {
    name : "atuka",
    surname : "Khuskivadze",
    moreInformaation : {
        name2 : "erekle",
        carfunc2 : function(car2){
            if(car2 === "Mercedes"){
                return "Your car is trash"
            } else {
                return "Your car is king as fuck"
            }
        }

    },
    carfunc : function(car1){
        if(car1 === "bmw"){
            return "car1 is best car ever"
        } else {
            return "Your car is trash"
        }
    
    }
}
console.log(info.surname)
console.log(info.carfunc("bmw"))
console.log(info.moreInformaation.name2)
console.log(info.moreInformaation.carfunc2("Mercedes"))