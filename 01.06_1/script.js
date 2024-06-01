let user1 = {
    fName:'Ivan',
    lName: 'Ivanov',
    sayHello: function(){
        console.log(`Hello, ${this.fName}`);
    }
}

let user2 = {
    fName:'Inna',
    lName: 'Ivanova',
}

//console.log(user1);
//user1.sayHello();

/*
// объявление функции
function sayHello(){
    console.log('Hello');
}

// функциональное выражение
let sayHello = function(){
    console.log('Hello');
}
*/

/*
// функция конструктор
let Students = function(fName, lName){
    this.firstName = fName;
    this.lastName = lName;

    // this.studentInfo = function(){
    //     console.log(`Имя: ${this.firstName}. Фамилия: ${this.lastName}.`);
    // };
};

// создаю объекты
let student1 = new Students('Иван', 'Петров');
let student2 = new Students('Светлана', 'Сидорова');

// записываем в прототип метод для объектов
Students.prototype.studentInfo = function(){
    console.log(`Имя: ${this.firstName}. Фамилия: ${this.lastName}.`);
};

console.log(student1, student2);

student1.studentInfo();// вызываем метод
student2.studentInfo();// вызываем метод
*/

/**
 * Classes ES6
 */
class Students{
    constructor(fName, lName){
        this.firstName = fName;
        this.lastName = lName;
    }

    studentInfo(){
        console.log(`Имя: ${this.firstName}. Фамилия: ${this.lastName}.`);
    }
}


let student1 = new Students('Сергей', 'Иванов');
console.log(student1);
student1.studentInfo();
// student1.introduce();

// дочерний класс
class NewStudents extends Students{
    constructor(fName, lName, schoolNumber){
        super(fName, lName);
        this.schoolNumber = schoolNumber;
    }

    introduce(){
        document.write(`<h2>Меня зовут ${this.firstName} ${this.lastName}, 
            закончил школу №${this.schoolNumber}</h2>`);
    }
}
let newStudent1 = new NewStudents('Павел', 'Иванов', 66);
console.log(newStudent1);

newStudent1.studentInfo();
newStudent1.introduce();

// alert('привет');