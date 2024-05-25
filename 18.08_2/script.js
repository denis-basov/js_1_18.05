/*
let age = 22;

// если возраст менее 16, вывести сообщение о том, что рано
if(age < 16){
    // выпонится только если условие истинно
    console.log('Пока рано, подрасти!');
}
*/

/*
let age = 10;

if(age >= 16){
    // выпонится только если условие истинно
    console.log('Добро пожаловать!');
}
*/

/*
let rating = -88;

if(rating === 3){
   console.log('Отлично'); 
}else if(rating === 2){
    console.log('Хорошо');
}else if(rating === 1){
    console.log('Плохо');
}else{
    console.log('Некорректное значение');
}*/


/*
let age = 20;

if(age >= 18){
    console.log('++++++++');
}else{
    console.log('--------');
}

age >= 18 ? console.log('++++++++') : console.log('--------');
*/


/**
 * while
 */
// вывести числа от 0 до 20
/*
let num = 0;

// цикл продолжается пока условие истинно
while(num <= 20){// пока num < 20, продолжаем
    console.log(num);
    num = num + 1;// увеличиваем на 1
}
*/

/**
 * for
 */
/*
for(let num = 0; num <= 20; num = num + 1){
    console.log(num);
}
*/

/*
for(let num = 0; num <= 20; num++){
    console.log(num);
}*/

/*
// num = num - 1;
// num -= 1;
// num--;

// вывести числа от 10 до 0
for(let num = 10; num >= 0; num--){
    console.log(num);
}
*/

/*
// * получить сумму чисел от 0 до 5
let sum = 0; // переменная для накопления суммы

for(let i = 0; i <= 5; i++){  
    sum = sum + i;// плюсуем текущее значение i к сумме
    // console.log('i:', i);
    // console.log('sum:', sum);
}
console.log(sum);
*/

/*
let sum = 0; // переменная для накопления суммы
for(let i = 0; i <= 50; i++){  
    sum = sum + i;
}
console.log(sum);
*/

/**
 * массивы
 */
// let student1 = 'Илья';
// let student2 = 'Артем';
// let student3 = 'Михаил';
// let student4 = 'Галина';
// let student5 = 'Анна';

// массив имен студентов
// let students = ['Илья', 'Артем', 'Михаил', 'Галина', 'Анна', 'Денис'];

/*
console.log(students);
// console.log(students[0]);
// console.log(students[4]);

for(let num = 0; num < students.length; num++){
    // console.log(num);
    console.log(students[num]);
}
*/

// for ... of 
/*
for(let student of students){
    console.log(student);
}
*/

/*
// собрать все элементы в одну строку
let studentsStr = '';
for(let student of students){
    studentsStr += student + ', ';
}
console.log(studentsStr);
*/

// четверти
/*
let arrow = 20;

if(arrow >= 0 && arrow < 15){
    console.log('1 четверть');
}else if(arrow >= 15 && arrow < 30){
    console.log('2 четверть');
}*/

/*
// 5 Выведите в косоль только четные числа. 
// Диапазон перебираемых чисел от 3 до 100.
for(let i = 3; i <= 100; i++){
    if(i % 2 === 0){// если четное, выводим
        console.log(i);
    }
}*/

/*
// 10* Создайте массив строк и 
// выведите через цикл элементы массива обернутые в параграфы.
let students = ['Илья', 'Артем', 'Михаил', 'Галина', 'Анна', 'Денис']; 

for(let student of students){
    console.log(`<p>${student}</p>`);
    document.write(`<p>${student}</p>`);
}*/

/*
// 10* Создайте массив строк и 
// выведите через цикл элементы массива обернутые в параграфы.
let students = ['Илья', 'Артем', 'Михаил', 'Галина', 'Анна', 'Денис']; 

for(let i = 0; i < students.length; i++){
    document.write(`<p class="student-${i + 1}">${i + 1}. ${students[i]}</p>`);
}*/

/*
// break - прерывание цикла
let students = ['Илья', 'Артем', 'Михаил', 'Галина', 'Анна', 'Денис']; 

for(let i = 0; i < students.length; i++){
    console.log(students[i]);
    if(students[i] === 'Михаил'){ // если найден Михаил, прерываем цикл
        console.log('Михаил найден!');
        break;
    }    
}*/

/*
// continue - переход к след итерации цикла
let students = ['Илья', 'Артем', 'Денис', 'Михаил', 'Галина', 'Анна']; 

for(let i = 0; i < students.length; i++){
    if(students[i] === 'Денис'){ // если найден 'Денис', переходим к след итерации
        continue;
    }    
    console.log(students[i]);
}*/