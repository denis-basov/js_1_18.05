// let firstName = 'Иван';
// let lastName = 'Петров';
// let age = 22;
// let hobby = 'Плавать';


// let user = ['Иван', 'Петров', 22, 'Плавать'];
// console.log(user);

/*
let student = {
    firstName: 'Иван',
    lastName: 'Петров',
    age: 22,
    hobby: 'Плавать',
    isAdmin: false,
};
console.log(student);
*/

// let fName = 'Ivan';
// console.log(fName.length);

// let numbers = [1,2,3,4,5];
// console.log(numbers);
// console.log(numbers.length);

/*
let student = {
    firstName: 'Иван',
    lastName: 'Петров',
    age: 22,
    hobby: 'Плавать',
    isAdmin: false,
};
console.log(student);
console.log(student.firstName);
console.log(student.hobby);*/

/*
let student = {
    firstName: 'Иван',
    lastName: 'Петров',
    age: 22,
    hobby: 'Плавать',
    isAdmin: false,
    'first exam': 'Математика',
};
console.log(student);
console.log(student['first exam']);*/

/*
let student = {
    firstName: 'Иван',
    lastName: 'Петров',
    age: 22,
    hobby: 'Плавать',
    isAdmin: false,
    'first exam': 'Математика',
};

// age = age + 1;
student.age = student.age + 1;
student.age += 1;
student.age++;

student.hobby = 'Спать';
student.address = 'СПБ, Пушкина 3';

console.log(student);
*/

/*
let student = {
    firstName: 'Иван',
    lastName: 'Петров',
    age: 22,
    hobby: ['Плавать', 'Есть', 'Гулять'],
    isAdmin: false,
    address: {
        city: 'СПБ',
        street: 'Пушкина',
        house: 3
    }
};
*/

/*
async function whereIAm() {
    // отправляем запрос на внешний сервер
    let response = await fetch(`https://restcountries.com/v3.1/all`); 
    let data = await response.json(); // получаем данные
  
    // показываем данные в документе
    console.log(data);
}
whereIAm();*/

/*
let student = {
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
    firstName: 'Иван',
    lastName: 'Петров',
    age: 22,
    hobby: ['Плавать', 'Есть', 'Гулять'],
    isAdmin: false,
    address: {
        city: 'СПБ',
        street: ['Пушкина', 'Ломоносова'],
        house: 3
    }
};

console.log(student.address.street[1]);
console.log(student.address.city);
console.log(student.hobby[2]);
console.log(student.test);

let userInfo = `<h2>Имя: ${student.firstName}, Фамилия: ${student.lastName}, 
                Возраст: ${student.age}, Хобби: ${student.hobby.join(', ')} .</h2>
                <img src="${student.avatar}" alt="${student.firstName} ${student.lastName}" width="200">`;
document.write(userInfo);                
*/

/*
// push
let hobbies = ['Плавать', 'Есть', 'Гулять'];
hobbies.push('Играть на флейте', 'Играть на баяне');
console.log(hobbies);
*/


// pop
/*
let hobbies = ['Плавать', 'Есть', 'Гулять'];
let lastEl = hobbies.pop();
console.log(hobbies);
console.log(lastEl);
*/

// splice
// let hobbies = ['Плавать', 'Есть', 'Гулять', 'Играть на флейте', 'Играть на баяне'];

/*
// удаление
hobbies.splice(2, 2);
console.log(hobbies);*/

/*
// добавление
hobbies.splice(1, 0, 'Смотреть ТВ');
console.log(hobbies);
*/

/*
let deleteItems = hobbies.splice(1, 2, 'Смотреть ТВ');
console.log(hobbies);// измененный массив
console.log(deleteItems); // удаленные элементы
*/

/**
 * foreach
 */
// let hobbies = ['Плавать', 'Есть', 'Гулять', 'Играть на флейте', 'Играть на баяне'];

/*
hobbies.forEach(function(hobby){
    console.log(hobby);
});

for(let hobby of hobbies){
    console.log(hobby);
}*/

/*
hobbies.forEach(function(hobby, index){
    console.log(`${index + 1}. ${hobby}`);
});*/