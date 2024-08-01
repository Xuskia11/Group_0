function Constructor4(num3, num4){
    if (num3 > 0 && num4 > 0){
        this.num3 = num3;
        this.num4 = num4;
    } else {
        this.num4 = num3;
        this.num3 = num4;
    };
};

const compare1 = new Constructor4(5, -1);
const compare2 = new Constructor4(5, 1);

console.log(compare1)
console.log(compare2)

function StudentInfo(username,surname,id){
    this.username = username
    this.surname = surname  
    this.id = id
}

const information = new StudentInfo("atuka","khuskivadze","60650002414")
console.log(information)
console.log(information.username)
console.log(information.surname)
console.log(information.id)

const paragraph = document.createElement("p")
const content = document.createTextNode("Student name is: !"+ " " + information.username + "! " + "Students surname is: " + "! " + information.surname + "! " + "and student id is: " + "! " + information.id + "!")
document.body.appendChild(paragraph)
paragraph.appendChild(content)
