function Person(name,lastname,age,print){
    this.name = name
    this.lastname = lastname
    this.age = age
    this.print = print
}

const printEverithing = function(){
    return this.name + " " + this.lastname + " " + this.age
}

const info = new Person("atuka","khuskivadze","15",printEverithing)
console.log(info.print())