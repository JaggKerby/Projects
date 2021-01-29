// console.log('Hello world');
// let userName = prompt('eNTER A NAME:' );
// console.log('Hello '+ userName);


// if (userName.length >= 5) {
//     console.log('Your name afwul');
// } else {
//     console.log('Your awesome!');
// };


// let firstName = 'Ilya';
// let secondName = 'Lukin';
// console.log(`Hello, ${firstName} ${secondName}!!`);
// let userName = prompt('Your name? ');
// console.log(`Hello ${userName}, your name lenght is ${userName.length}`); 


// let bitsinKilo = 15;
// let bitsNum = bitsinKilo * 1024  * 8 ;
// console.log(bitsNum);


// let miles = prompt('Укажите сколько миль? ');
// let kilometrs = miles * 1.65; 
// console.log(`Это равно ${+kilometrs.toFixed(2)} километрам`);
// let i = +prompt('Введи число '); 
// i = i%2 > 0 ? console.log('Odd') : console.log('Even');


// let a = 'sdsdqqdqwdqdqweqxaasdad';
// let b = 'sdsdqqdqwdqdqweqxaasdsdsdd';
// console.log(a.length + b.length);
// let a = prompt('Enter a 3 number');
// let arr = a.split('');
// let result = arr.reduce(function(sum, current){
//     return sum * current; 
// }, 1);
// console.log(result);


// let value = 20;
// console.log(
//     value != 20,
//     value * 10 == 100,
//     value < 20,
//     value > 0 && value < 11,
//     value === 10
// )


// const askgender = prompt('Enter a gender: ');
// let gender = (askgender == 'm' ) ? 'male' : 'female';
// console.log(gender);


// const a = 10;
// const b = 12; 
// if ( a > b) {
//     console.log(a)
// } else {
//     console.log(b)
// };


// const userNum = +prompt('Enter a number from 1 to 12: ');
// switch (userNum) {
//     case 1: 
//         alert('January');
//         break;
//     case 2:
//         alert('February');
//         break;
//     case 3: 
//         alert('march');
//         break;
//     case 4:
//         alert('April');
//         break;
//     default:
//         alert('Some month after April');
//         break;
// }


// const inputNumber = +prompt('Enter a number: ');
// let factorial = 1;
// for (let i = 1; i <= inputNumber; i++) {
//     factorial  = factorial * i; 
// }
// console.log(factorial);


// let sum = 0;
// while (true) {
//  const input = prompt("enter a number or = : ");
//  if (input != '=') {
//      sum = sum + Number(input);
//     } else {
//         break;
//     };
// };
// console.log(sum);


// let a = +prompt('Enter a number: ');
// for ( let i = 1; i <= 10; i++) {
//     console.log(`Result ${a} * ${i} = ${a*i}`);
// }


// const number = Number(prompt('Enter a number: '));
// let a = 1;
// let sum = 0;
// let countNum = 0;
// for (let i = 1; i <= number; i++) {
// };




// function findDifference(a, b) {
//     let volumeA = a.reduce(function(sum, current){
//             return sum * current; 
//         }, 1);
//     let volumeB = b.reduce(function(sum, current){
//             return sum * current; 
//         }, 1);
//     if (volumeA > volumeB ) {   
//         return volumeA - volumeB;
//     } else {
//         return volumeB - volumeA;
//     };
//   };
// console.log(findDifference([3, 2, 5], [1, 4, 4]));


// let item = {
//     id: 3434,
//     storageloc: 'A3',
//     weight: 12
// };
// let itemPrice = Object.assign (
//     {},
//     item,
//     {price: 200}
// );
// item.weight = 234;
// console.log(itemPrice);


// let user = {
//     name: 'John'
// };
// user.age = +prompt('Enter a number: ');
// console.log(user);
// let newuser = Object.assign (
//     {},
//     user,
//     {role: 'admin'}
// );
// console.log(newuser);
// let {name, age, role} = newuser; 
// console.log(name, age, role);


// const numbers = [10, 29, 39, 49, 43];
// const userNum = +prompt('Enter a number to find: ');
// if (numbers.indexOf(userNum) == -1) {
//     console.log('Not found');
// } else {
//     let a = numbers.indexOf(userNum);
//     console.log(`Число ${numbers[a]} найдено`);
// };


