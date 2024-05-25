/*
// объявление
function greet(){
    console.log('Hello');
}

// вызов
greet();
*/

/*
// функция с параметром userName
function sayHello(userName){
    console.log(`Привет, ${userName}!!!`);
}

sayHello('Светлана');
sayHello('Ирина');
sayHello('Инна');
*/

// console.log(typeof true);

/*
let numbers = [1,2,3,4,5,6,7,8];
let bill = [433,678,233];

function sumArray(arr){
    let sum = 0;
    for(let element of arr){
        sum = sum + element;
    }
    console.log(sum);
}

sumArray(numbers);
sumArray(bill);*/

/*
function calcSum(num1, num2){
    let result = num1 + num2;
    //console.log(result);
    return result;
}

let sum1 = calcSum(5, 4);
let sum2 = calcSum(9, 66);
console.log(sum1, sum2);

*/

/*
let numbers = [1,2,3,4,5,6,7,8];
let bill = [433,678,233];

function sumArray(arr){
    let sum = 0;
    for(let element of arr){
        sum = sum + element;
    }
    return sum;// 1
}

let sumBill1 = sumArray(numbers);//2
let sumBill2 = sumArray(bill);

console.log(sumBill1 + 20);*/

/*
function calcSum(num1, num2){
    let result = num1 + num2;
    return result;
}
let res1 = calcSum(4,6);
let res2 = calcSum(1,8);

console.log(res1);*/


/*
const PI = 3.14;

function getCircle(radius){
    return 2 * PI * radius;
}

console.log(getCircle(5));
console.log(getCircle(10));
console.log(getCircle(15));*/

/*
let head1 = document.querySelector('#head-1');// получаем элемент
// console.log(head1);


function getText(){
    // console.log(head1.textContent);
    head1.textContent = 'Hello';
}

getText();

head1.addEventListener('click', function(){
    head1.style.color = 'red';
});*/